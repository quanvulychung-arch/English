/**
 * English Quest - Grade 5 Core Game Logic (30 Stages Master Edition)
 * Manages 30 Stages across 6 Chapters, Mana & Ultimate Skill, Combo Counter, Dash Combat VFX, Flashcards, Confetti & Lucky Chests
 */

class EnglishQuestGame {
  constructor() {
    this.defaultState = {
      playerName: "Hiệp Sĩ Nhí",
      avatarClass: "knight",
      coins: 80,
      totalStars: 0,
      unlockedStages: [1],
      stageStars: {},
      inventory: {
        potion_hp: 2,
        shield_protect: 1,
        hint_scroll: 1
      },
      unlockedSkins: ["knight"]
    };

    // Initialize 30 stages with 0 stars
    for (let i = 1; i <= 30; i++) {
      this.defaultState.stageStars[i] = 0;
    }

    this.player = this.loadProgress();

    // Runtime Map & Battle State
    this.currentChapter = 1;
    this.currentStage = null;
    this.isPracticeMode = false;
    this.currentQuestionIdx = 0;
    this.playerHp = 100;
    this.playerMaxHp = 100;
    this.playerMana = 0; // 0 to 100
    this.monsterHp = 100;
    this.monsterMaxHp = 100;
    this.shieldActive = false;
    this.isAnswering = false;
    this.comboCount = 0;

    // Sentence builder state
    this.selectedSentenceWords = [];

    // Confetti engine
    this.confettiParticles = [];
    this.confettiAnimId = null;

    this.initElements();
    this.bindEvents();
    this.initConfetti();
    this.updateHUD();
    this.renderStagesMap();
  }

  loadProgress() {
    const saved = localStorage.getItem('english_quest_g5_save_v2');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          ...this.defaultState,
          ...parsed,
          stageStars: { ...this.defaultState.stageStars, ...(parsed.stageStars || {}) },
          inventory: { ...this.defaultState.inventory, ...(parsed.inventory || {}) }
        };
      } catch (e) {
        console.error("Error loading save:", e);
      }
    }
    return { ...this.defaultState };
  }

  saveProgress() {
    localStorage.setItem('english_quest_g5_save_v2', JSON.stringify(this.player));
    this.updateHUD();
  }

  initElements() {
    // Top HUD
    this.hudPlayerName = document.getElementById('hud-player-name');
    this.hudPlayerLevel = document.getElementById('hud-player-level');
    this.hudCoins = document.getElementById('hud-coins');
    this.hudStars = document.getElementById('hud-stars');
    this.hudAvatar = document.getElementById('hud-avatar');

    // Screens
    this.screens = {
      welcome: document.getElementById('screen-welcome'),
      map: document.getElementById('screen-map'),
      battle: document.getElementById('screen-battle'),
      flashcards: document.getElementById('screen-flashcards'),
      handbook: document.getElementById('screen-handbook'),
      shop: document.getElementById('screen-shop')
    };

    // Battle Elements
    this.battleStageName = document.getElementById('battle-stage-name');
    this.battleProgress = document.getElementById('battle-progress');
    this.comboBadge = document.getElementById('combo-badge');

    this.playerAvatarBox = document.getElementById('player-avatar-box');
    this.playerNameDisplay = document.getElementById('player-name-display');
    this.playerHpBar = document.getElementById('player-hp-bar');
    this.playerHpText = document.getElementById('player-hp-text');
    this.playerManaBar = document.getElementById('player-mana-bar');

    this.monsterAvatarBox = document.getElementById('monster-avatar-box');
    this.monsterNameDisplay = document.getElementById('monster-name-display');
    this.monsterHpBar = document.getElementById('monster-hp-bar');
    this.monsterHpText = document.getElementById('monster-hp-text');

    this.questionTitle = document.getElementById('question-title');
    this.questionText = document.getElementById('question-text');
    this.questionIllustration = document.getElementById('question-illustration');
    this.optionsContainer = document.getElementById('options-container');
    this.btnSpeak = document.getElementById('btn-speak');
    this.feedbackBox = document.getElementById('feedback-box');
    this.btnNextQuestion = document.getElementById('btn-next-question');

    // Battle Inventory buttons
    this.btnItemPotion = document.getElementById('btn-item-potion');
    this.btnItemShield = document.getElementById('btn-item-shield');
    this.btnItemHint = document.getElementById('btn-item-hint');
    this.btnItemUltimate = document.getElementById('btn-item-ultimate');

    // Result Modal
    this.resultModal = document.getElementById('result-modal');
    this.resultTitle = document.getElementById('result-title');
    this.resultStarsRow = document.getElementById('result-stars-row');
    this.resultMessage = document.getElementById('result-message');
    this.resultCoinsEarned = document.getElementById('result-coins-earned');
    this.chestsRow = document.getElementById('chests-row');

    // Confetti Canvas
    this.confettiCanvas = document.getElementById('confetti-canvas');
    if (this.confettiCanvas) {
      this.confettiCtx = this.confettiCanvas.getContext('2d');
    }
  }

  bindEvents() {
    // Navigation
    document.getElementById('btn-start-game').addEventListener('click', () => {
      const nameInput = document.getElementById('player-name-input').value.trim();
      if (nameInput) {
        this.player.playerName = nameInput;
      }
      this.saveProgress();
      this.showScreen('map');
      gameAudio.playClick();
      gameAudio.startBGM();
    });

    document.getElementById('btn-hud-map').addEventListener('click', () => {
      this.showScreen('map');
      this.renderStagesMap();
      gameAudio.playClick();
    });

    document.getElementById('btn-hud-flashcards').addEventListener('click', () => {
      this.renderFlashcards();
      this.showScreen('flashcards');
      gameAudio.playClick();
    });

    document.getElementById('btn-hud-handbook').addEventListener('click', () => {
      this.renderHandbook();
      this.showScreen('handbook');
      gameAudio.playClick();
    });

    document.getElementById('btn-hud-bgm').addEventListener('click', (e) => {
      const isPlaying = gameAudio.toggleBGM();
      e.target.textContent = isPlaying ? '🎵' : '🔇';
      gameAudio.playClick();
    });

    document.getElementById('btn-hud-shop').addEventListener('click', () => {
      this.renderShop();
      this.showScreen('shop');
      gameAudio.playClick();
    });

    document.getElementById('btn-hud-sound').addEventListener('click', (e) => {
      const isMuted = gameAudio.toggleMute();
      e.target.textContent = isMuted ? '🔇' : '🔊';
    });

    // Chapter Tabs Navigation
    document.querySelectorAll('.chapter-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const ch = parseInt(btn.dataset.chapter);
        if (ch) {
          this.currentChapter = ch;
          this.renderStagesMap();
          gameAudio.playClick();
        }
      });
    });

    // Quick Practice Button
    const btnQuickPractice = document.getElementById('btn-quick-practice');
    if (btnQuickPractice) {
      btnQuickPractice.addEventListener('click', () => {
        gameAudio.playClick();
        this.startQuickPractice();
      });
    }

    // Character Selection
    document.querySelectorAll('.char-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const charType = btn.dataset.char;
        this.player.avatarClass = charType;
        document.querySelectorAll('.char-opt-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        document.getElementById('hero-welcome-preview').innerHTML = SVGIcons[charType];
        this.updateHUD();
        gameAudio.playClick();
      });
    });

    // Audio Speech button in Battle
    this.btnSpeak.addEventListener('click', () => {
      if (!this.currentStage) return;
      const q = this.currentStage.questions[this.currentQuestionIdx];
      if (q && q.audioText) {
        this.btnSpeak.classList.add('speaking');
        gameAudio.speakEnglish(q.audioText, null, () => {
          this.btnSpeak.classList.remove('speaking');
        });
      }
    });

    // Next Question Button
    this.btnNextQuestion.addEventListener('click', () => {
      this.nextQuestion();
    });

    // Battle Inventory Items
    this.btnItemPotion.addEventListener('click', () => this.useItem('potion_hp'));
    this.btnItemShield.addEventListener('click', () => this.useItem('shield_protect'));
    this.btnItemHint.addEventListener('click', () => this.useItem('hint_scroll'));
    
    // Ultimate Skill Button
    if (this.btnItemUltimate) {
      this.btnItemUltimate.addEventListener('click', () => this.useUltimateSkill());
    }

    // Modal Continue button
    document.getElementById('btn-modal-continue').addEventListener('click', () => {
      this.resultModal.classList.remove('show');
      this.stopConfetti();
      this.showScreen('map');
      this.renderStagesMap();
    });
  }

  showScreen(screenName) {
    Object.values(this.screens).forEach(scr => {
      if (scr) scr.classList.remove('active');
    });
    if (this.screens[screenName]) {
      this.screens[screenName].classList.add('active');
    }
  }

  updateHUD() {
    this.hudPlayerName.textContent = this.player.playerName;
    this.hudCoins.textContent = this.player.coins;
    this.hudStars.textContent = this.player.totalStars;
    this.hudAvatar.innerHTML = SVGIcons[this.player.avatarClass] || SVGIcons.knight;

    // Calculate RPG Level
    const level = Math.floor((this.player.totalStars || 0) / 4) + 1;
    if (this.hudPlayerLevel) {
      this.hudPlayerLevel.textContent = `Lv. ${level} 🎓`;
    }
  }

  /* ================= MAP RENDERING ================= */
  renderStagesMap() {
    // Update Chapter tab buttons highlight
    document.querySelectorAll('.chapter-tab-btn').forEach(btn => {
      const ch = parseInt(btn.dataset.chapter);
      btn.classList.toggle('active', ch === this.currentChapter);
    });

    const listContainer = document.getElementById('stages-list');
    listContainer.innerHTML = '';

    // Filter stages for the active chapter
    const currentChapterStages = GAME_STAGES.filter(s => s.chapter === this.currentChapter);

    currentChapterStages.forEach(stage => {
      const isUnlocked = this.player.unlockedStages.includes(stage.id);
      const starsEarned = this.player.stageStars[stage.id] || 0;

      const card = document.createElement('div');
      card.className = `stage-card ${isUnlocked ? '' : 'locked'}`;
      card.style.setProperty('--theme-color', stage.themeColor);

      let starsHtml = '';
      for (let i = 1; i <= 3; i++) {
        starsHtml += `<span class="stage-star ${i <= starsEarned ? 'earned' : ''}">★</span>`;
      }

      card.innerHTML = `
        <div class="stage-card-left">
          <div class="stage-monster-preview">
            ${stage.monster.icon}
          </div>
          <div class="stage-info">
            <div class="stage-name-title">${stage.name}</div>
            <div class="stage-sub-desc">${stage.description}</div>
            <div class="stage-stars-row">${starsHtml}</div>
          </div>
        </div>
        <div class="stage-action">
          <button class="btn-primary stage-action-btn" ${isUnlocked ? '' : 'disabled'}>
            ${isUnlocked ? (starsEarned > 0 ? 'Chơi Lại ⚔️' : 'Vượt Ải ⚔️') : 'Khóa 🔒'}
          </button>
        </div>
      `;

      if (isUnlocked) {
        card.addEventListener('click', () => {
          gameAudio.playClick();
          this.startStage(stage.id);
        });
      }

      listContainer.appendChild(card);
    });
  }

  /* ================= STAGE / BATTLE INITIALIZATION ================= */
  startStage(stageId) {
    this.isPracticeMode = false;
    this.currentStage = GAME_STAGES.find(s => s.id === stageId);
    if (!this.currentStage) return;

    // Automatically sync currentChapter to the stage's chapter
    if (this.currentStage.chapter) {
      this.currentChapter = this.currentStage.chapter;
    }

    this.currentQuestionIdx = 0;
    this.comboCount = 0;
    this.playerHp = 100;
    this.playerMaxHp = 100;
    this.playerMana = 0; // Reset Rage Mana
    this.monsterMaxHp = this.currentStage.monster.maxHp;
    this.monsterHp = this.monsterMaxHp;
    this.shieldActive = false;
    this.isAnswering = false;

    this.battleStageName.textContent = this.currentStage.name;
    this.playerNameDisplay.textContent = this.player.playerName;
    this.playerAvatarBox.innerHTML = SVGIcons[this.player.avatarClass] || SVGIcons.knight;

    this.monsterNameDisplay.textContent = this.currentStage.monster.name;
    this.monsterAvatarBox.innerHTML = this.currentStage.monster.icon;

    this.updateComboBadge();
    this.updateHpBars();
    this.updateManaBar();
    this.updateBattleInventoryButtons();
    this.loadQuestion();
    this.showScreen('battle');
  }

  startQuickPractice() {
    this.isPracticeMode = true;
    
    // Pick 5 random questions across all 30 stages
    const allQuestions = [];
    GAME_STAGES.forEach(s => allQuestions.push(...s.questions));
    const randomQuestions = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 5);

    this.currentStage = {
      id: 999,
      name: "⚡ Đấu Trường Luyện Tập Nhanh",
      monster: {
        name: "Người Rơm Luyện Võ",
        icon: SVGIcons.golem,
        maxHp: 160,
        attackPower: 12
      },
      questions: randomQuestions
    };

    this.currentQuestionIdx = 0;
    this.comboCount = 0;
    this.playerHp = 100;
    this.playerMaxHp = 100;
    this.playerMana = 0;
    this.monsterMaxHp = 160;
    this.monsterHp = 160;
    this.shieldActive = false;
    this.isAnswering = false;

    this.battleStageName.textContent = "⚡ Luyện Tập Nhanh";
    this.playerNameDisplay.textContent = this.player.playerName;
    this.playerAvatarBox.innerHTML = SVGIcons[this.player.avatarClass] || SVGIcons.knight;
    this.monsterNameDisplay.textContent = this.currentStage.monster.name;
    this.monsterAvatarBox.innerHTML = this.currentStage.monster.icon;

    this.updateComboBadge();
    this.updateHpBars();
    this.updateManaBar();
    this.updateBattleInventoryButtons();
    this.loadQuestion();
    this.showScreen('battle');
  }

  updateComboBadge() {
    if (this.comboCount >= 2) {
      this.comboBadge.textContent = `🔥 COMBO x${this.comboCount}!`;
      this.comboBadge.classList.add('show');
    } else {
      this.comboBadge.classList.remove('show');
    }
  }

  updateHpBars() {
    const playerPct = Math.max(0, Math.min(100, (this.playerHp / this.playerMaxHp) * 100));
    this.playerHpBar.style.width = `${playerPct}%`;
    this.playerHpText.textContent = `${this.playerHp}/${this.playerMaxHp}`;
    this.playerHpBar.classList.toggle('danger', playerPct < 30);

    const monsterPct = Math.max(0, Math.min(100, (this.monsterHp / this.monsterMaxHp) * 100));
    this.monsterHpBar.style.width = `${monsterPct}%`;
    this.monsterHpText.textContent = `${this.monsterHp}/${this.monsterMaxHp}`;
    this.monsterHpBar.classList.toggle('danger', monsterPct < 30);
  }

  updateManaBar() {
    if (this.playerManaBar) {
      this.playerManaBar.style.width = `${this.playerMana}%`;
    }
    if (this.btnItemUltimate) {
      if (this.playerMana >= 100) {
        this.btnItemUltimate.disabled = false;
        this.btnItemUltimate.classList.add('ready');
        this.btnItemUltimate.innerHTML = `⚡ LONG THẦN TRẢM (100%)`;
      } else {
        this.btnItemUltimate.disabled = true;
        this.btnItemUltimate.classList.remove('ready');
        this.btnItemUltimate.innerHTML = `⚡ Nộ (${this.playerMana}%)`;
      }
    }
  }

  useUltimateSkill() {
    if (this.playerMana < 100 || this.isAnswering || this.monsterHp <= 0) return;

    this.playerMana = 0;
    this.updateManaBar();

    gameAudio.playUltimate();

    // Dash attack animation
    this.playerAvatarBox.classList.add('dash-forward');
    setTimeout(() => this.playerAvatarBox.classList.remove('dash-forward'), 400);

    this.createSlashEffect(this.monsterAvatarBox);
    this.monsterAvatarBox.classList.add('shake-animation');
    setTimeout(() => this.monsterAvatarBox.classList.remove('shake-animation'), 500);

    // Deal 75 AoE True Damage
    const ultDamage = 75;
    this.monsterHp = Math.max(0, this.monsterHp - ultDamage);
    this.showDamageNumber(this.monsterAvatarBox, `🔥 LONG THẦN TRẢM! -${ultDamage} HP`, false, true);
    this.updateHpBars();

    if (this.monsterHp <= 0) {
      setTimeout(() => this.showVictoryModal(), 600);
    }
  }

  updateBattleInventoryButtons() {
    this.btnItemPotion.innerHTML = `🧪 Máu (${this.player.inventory.potion_hp || 0})`;
    this.btnItemPotion.disabled = !this.player.inventory.potion_hp || this.player.inventory.potion_hp <= 0;

    this.btnItemShield.innerHTML = `🛡️ Khiên (${this.player.inventory.shield_protect || 0})`;
    this.btnItemShield.disabled = !this.player.inventory.shield_protect || this.player.inventory.shield_protect <= 0 || this.shieldActive;

    this.btnItemHint.innerHTML = `📜 Gợi Ý (${this.player.inventory.hint_scroll || 0})`;
    this.btnItemHint.disabled = !this.player.inventory.hint_scroll || this.player.inventory.hint_scroll <= 0;
  }

  useItem(itemId) {
    if (!this.player.inventory[itemId] || this.player.inventory[itemId] <= 0) return;

    if (itemId === 'potion_hp') {
      if (this.playerHp >= this.playerMaxHp) return;
      this.player.inventory.potion_hp--;
      this.playerHp = Math.min(this.playerMaxHp, this.playerHp + 40);
      this.showDamageNumber(this.playerAvatarBox, "+40 HP", true);
      gameAudio.playCorrect();
    } else if (itemId === 'shield_protect') {
      this.player.inventory.shield_protect--;
      this.shieldActive = true;
      this.showDamageNumber(this.playerAvatarBox, "SHIELD ON!", true);
      gameAudio.playCorrect();
    } else if (itemId === 'hint_scroll') {
      this.player.inventory.hint_scroll--;
      this.applyHintScroll();
      gameAudio.playCoin();
    }

    this.saveProgress();
    this.updateHpBars();
    this.updateBattleInventoryButtons();
  }

  applyHintScroll() {
    const q = this.currentStage.questions[this.currentQuestionIdx];
    if (q.type === 'sentence_scramble') return;

    const optButtons = document.querySelectorAll('.option-btn');
    for (let i = 0; i < optButtons.length; i++) {
      if (i !== q.correctIndex && !optButtons[i].disabled) {
        optButtons[i].disabled = true;
        optButtons[i].style.opacity = '0.3';
        optButtons[i].style.textDecoration = 'line-through';
        this.showDamageNumber(optButtons[i], "ELIMINATED", false);
        break;
      }
    }
  }

  /* ================= LOAD QUESTION ================= */
  loadQuestion() {
    this.isAnswering = false;
    this.feedbackBox.className = 'feedback-box';
    this.feedbackBox.innerHTML = '';
    this.btnNextQuestion.style.display = 'none';

    const qList = this.currentStage.questions;
    const q = qList[this.currentQuestionIdx];

    this.battleProgress.textContent = `Câu ${this.currentQuestionIdx + 1} / ${qList.length}`;
    this.questionTitle.textContent = q.title;
    this.questionText.textContent = q.questionText;

    if (q.icon) {
      this.questionIllustration.style.display = 'flex';
      this.questionIllustration.innerHTML = q.icon;
    } else {
      this.questionIllustration.style.display = 'none';
    }

    if (q.audioText) {
      setTimeout(() => {
        gameAudio.speakEnglish(q.audioText);
      }, 350);
    }

    this.optionsContainer.innerHTML = '';

    if (q.type === 'sentence_scramble') {
      this.renderSentenceScramble(q);
    } else {
      this.renderMultipleChoice(q);
    }
  }

  renderMultipleChoice(q) {
    const grid = document.createElement('div');
    grid.className = 'options-grid';

    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((optText, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `
        <span class="option-letter">${letters[idx]}</span>
        <span>${optText}</span>
      `;
      btn.addEventListener('click', () => {
        this.handleChoiceAnswer(idx, q);
      });
      grid.appendChild(btn);
    });

    this.optionsContainer.appendChild(grid);
  }

  renderSentenceScramble(q) {
    this.selectedSentenceWords = [];
    const box = document.createElement('div');
    box.className = 'sentence-builder-box';

    const dropArea = document.createElement('div');
    dropArea.className = 'constructed-sentence-area empty';
    dropArea.id = 'constructed-sentence-area';

    const bank = document.createElement('div');
    bank.className = 'word-chips-bank';
    bank.id = 'word-chips-bank';

    const shuffled = [...q.words].sort(() => Math.random() - 0.5);

    shuffled.forEach((word, wIdx) => {
      const chip = document.createElement('button');
      chip.className = 'word-chip';
      chip.textContent = word;
      chip.dataset.word = word;
      chip.dataset.idx = wIdx;

      chip.addEventListener('click', () => {
        if (this.isAnswering) return;
        gameAudio.playClick();
        this.addWordToSentence(word, chip);
      });

      bank.appendChild(chip);
    });

    const actionRow = document.createElement('div');
    actionRow.className = 'sentence-action-row';

    const btnReset = document.createElement('button');
    btnReset.className = 'btn-secondary';
    btnReset.textContent = '🔄 Xếp Lại';
    btnReset.addEventListener('click', () => {
      if (this.isAnswering) return;
      this.renderSentenceScramble(q);
    });

    const btnSubmit = document.createElement('button');
    btnSubmit.className = 'btn-primary';
    btnSubmit.textContent = '⚔️ Tung Chiêu!';
    btnSubmit.addEventListener('click', () => {
      this.handleSentenceSubmit(q);
    });

    actionRow.appendChild(btnReset);
    actionRow.appendChild(btnSubmit);

    box.appendChild(dropArea);
    box.appendChild(bank);
    box.appendChild(actionRow);

    this.optionsContainer.appendChild(box);
  }

  addWordToSentence(word, originalChip) {
    originalChip.classList.add('used');
    this.selectedSentenceWords.push({ word, chipRef: originalChip });

    const dropArea = document.getElementById('constructed-sentence-area');
    dropArea.classList.remove('empty');

    const inChip = document.createElement('button');
    inChip.className = 'word-chip in-target';
    inChip.textContent = word;

    inChip.addEventListener('click', () => {
      if (this.isAnswering) return;
      gameAudio.playClick();
      originalChip.classList.remove('used');
      this.selectedSentenceWords = this.selectedSentenceWords.filter(item => item.chipRef !== originalChip);
      inChip.remove();
      if (this.selectedSentenceWords.length === 0) {
        dropArea.classList.add('empty');
      }
    });

    dropArea.appendChild(inChip);
  }

  handleChoiceAnswer(selectedIndex, q) {
    if (this.isAnswering) return;
    this.isAnswering = true;

    const optButtons = document.querySelectorAll('.option-btn');
    optButtons.forEach(btn => btn.disabled = true);

    const isCorrect = (selectedIndex === q.correctIndex);
    if (isCorrect) {
      optButtons[selectedIndex].classList.add('correct');
      this.comboCount++;
      this.updateComboBadge();
      this.processCorrectAttack(q.explanation);
    } else {
      optButtons[selectedIndex].classList.add('wrong');
      optButtons[q.correctIndex].classList.add('correct');
      this.comboCount = 0;
      this.updateComboBadge();
      this.processWrongDamage(q.explanation);
    }
  }

  handleSentenceSubmit(q) {
    if (this.isAnswering) return;
    if (this.selectedSentenceWords.length === 0) return;

    this.isAnswering = true;
    const constructedStr = this.selectedSentenceWords.map(w => w.word).join(' ');
    const correctStr = q.correctOrder.join(' ');

    const isCorrect = (constructedStr.trim().toLowerCase() === correctStr.trim().toLowerCase());
    if (isCorrect) {
      this.comboCount++;
      this.updateComboBadge();
      this.processCorrectAttack(q.explanation);
    } else {
      this.comboCount = 0;
      this.updateComboBadge();
      this.processWrongDamage(q.explanation);
    }
  }

  /* ================= COMBAT RESOLUTION ================= */
  processCorrectAttack(explanation) {
    gameAudio.playAttack();

    // Dash attack animation
    this.playerAvatarBox.classList.add('dash-forward');
    setTimeout(() => this.playerAvatarBox.classList.remove('dash-forward'), 300);

    this.createSlashEffect(this.monsterAvatarBox);
    this.monsterAvatarBox.classList.add('shake-animation');
    setTimeout(() => this.monsterAvatarBox.classList.remove('shake-animation'), 400);

    const baseDmg = Math.ceil(this.monsterMaxHp / this.currentStage.questions.length);
    const bonusDmg = this.comboCount >= 2 ? Math.floor(baseDmg * 0.4) : 0;
    const totalDmg = baseDmg + bonusDmg;

    this.monsterHp = Math.max(0, this.monsterHp - totalDmg);

    // Charge Mana +25%
    this.playerMana = Math.min(100, this.playerMana + 25);
    this.updateManaBar();
    
    if (this.comboCount >= 2) {
      this.showDamageNumber(this.monsterAvatarBox, `CRIT! -${totalDmg} HP`, false, true);
      gameAudio.playCombo(this.comboCount);
    } else {
      this.showDamageNumber(this.monsterAvatarBox, `-${totalDmg} HP`, false);
      gameAudio.playMonsterHurt();
      gameAudio.playCorrect();
    }

    this.updateHpBars();

    this.feedbackBox.className = 'feedback-box show correct';
    this.feedbackBox.innerHTML = `
      <div class="feedback-title">✨ CHÍNH XÁC! TUNG CHIÊU THÀNH CÔNG! ${this.comboCount >= 2 ? `(Combo x${this.comboCount} Sát Thương 🔥)` : ''}</div>
      <div class="feedback-desc">${explanation}</div>
    `;

    this.btnNextQuestion.style.display = 'inline-flex';
  }

  processWrongDamage(explanation) {
    if (this.shieldActive) {
      this.shieldActive = false;
      this.showDamageNumber(this.playerAvatarBox, "BLOCKED!", true);
      gameAudio.playCorrect();
    } else {
      gameAudio.playWrong();
      this.playerAvatarBox.classList.add('shake-animation');
      setTimeout(() => this.playerAvatarBox.classList.remove('shake-animation'), 400);

      const monsterAttack = this.currentStage.monster.attackPower || 15;
      this.playerHp = Math.max(0, this.playerHp - monsterAttack);
      this.showDamageNumber(this.playerAvatarBox, `-${monsterAttack} HP`, false);
      gameAudio.playPlayerHurt();
    }

    this.updateHpBars();

    this.feedbackBox.className = 'feedback-box show wrong';
    this.feedbackBox.innerHTML = `
      <div class="feedback-title">❌ CHƯA CHÍNH XÁC! BỊ QUÁI TẤN CÔNG!</div>
      <div class="feedback-desc">${explanation}</div>
    `;

    if (this.playerHp <= 0) {
      setTimeout(() => this.showDefeatModal(), 800);
    } else {
      this.btnNextQuestion.style.display = 'inline-flex';
    }
  }

  createSlashEffect(parentElem) {
    const slash = document.createElement('div');
    slash.className = 'attack-slash';
    parentElem.appendChild(slash);
    setTimeout(() => slash.remove(), 350);
  }

  showDamageNumber(targetElem, text, isHeal = false, isCrit = false) {
    const num = document.createElement('div');
    num.className = `damage-number ${isHeal ? 'heal' : ''} ${isCrit ? 'crit' : ''}`;
    num.textContent = text;
    targetElem.appendChild(num);
    setTimeout(() => num.remove(), 1000);
  }

  nextQuestion() {
    this.currentQuestionIdx++;
    if (this.currentQuestionIdx < this.currentStage.questions.length && this.monsterHp > 0) {
      this.loadQuestion();
    } else {
      this.showVictoryModal();
    }
  }

  /* ================= VICTORY & DEFEAT ================= */
  showVictoryModal() {
    gameAudio.playVictory();
    this.startConfetti();

    // Setup Lucky Chests
    this.initLuckyChests();

    if (this.isPracticeMode) {
      const reward = 35;
      this.player.coins += reward;
      this.saveProgress();

      this.resultTitle.textContent = "⚡ HOÀN THÀNH LUYỆN TẬP!";
      this.resultTitle.style.color = "#38BDF8";
      this.resultStarsRow.innerHTML = '<span style="font-size: 1.4rem; color: #FBBF24;">Rèn luyện xuất sắc! 🌟</span>';
      this.resultMessage.textContent = "Bạn đã hoàn thành lượt luyện tập và nhận thêm Vàng thưởng!";
      this.resultCoinsEarned.textContent = `+${reward} Vàng Thưởng 🪙`;
      this.resultModal.classList.add('show');
      return;
    }

    let stars = 1;
    if (this.playerHp >= 75) stars = 3;
    else if (this.playerHp >= 40) stars = 2;

    const currentSavedStars = this.player.stageStars[this.currentStage.id] || 0;
    if (stars > currentSavedStars) {
      this.player.totalStars += (stars - currentSavedStars);
      this.player.stageStars[this.currentStage.id] = stars;
    }

    // Unlock next stage up to Stage 30
    if (this.currentStage.id < 30 && !this.player.unlockedStages.includes(this.currentStage.id + 1)) {
      this.player.unlockedStages.push(this.currentStage.id + 1);
    }

    const coinsReward = stars * 15 + 25;
    this.player.coins += coinsReward;

    this.saveProgress();

    this.resultTitle.textContent = "🎉 CHIẾN THẮNG ẢI!";
    this.resultTitle.style.color = "#FBBF24";

    let starsHtml = '';
    for (let i = 1; i <= 3; i++) {
      starsHtml += `<span class="star ${i <= stars ? 'earned' : ''}">★</span>`;
    }
    this.resultStarsRow.innerHTML = starsHtml;

    this.resultMessage.textContent = `Tuyệt vời! Bạn đã vượt qua ${this.currentStage.name} và bảo vệ Vương Quốc Anh Ngữ!`;
    this.resultCoinsEarned.textContent = `+${coinsReward} Vàng 🪙`;

    this.resultModal.classList.add('show');
  }

  initLuckyChests() {
    if (!this.chestsRow) return;
    const chestBoxes = this.chestsRow.querySelectorAll('.chest-box');
    chestBoxes.forEach(box => {
      box.className = 'chest-box';
      box.textContent = '🎁';
      box.onclick = () => {
        chestBoxes.forEach(b => b.onclick = null); // disable all
        box.classList.add('opened');
        gameAudio.playChestOpen();
        
        const gifts = [
          { txt: "+25 Vàng 🪙", run: () => { this.player.coins += 25; } },
          { txt: "+1 Bình Máu 🧪", run: () => { this.player.inventory.potion_hp = (this.player.inventory.potion_hp || 0) + 1; } },
          { txt: "+1 Khiên 🛡️", run: () => { this.player.inventory.shield_protect = (this.player.inventory.shield_protect || 0) + 1; } },
          { txt: "+1 Gợi Ý 📜", run: () => { this.player.inventory.hint_scroll = (this.player.inventory.hint_scroll || 0) + 1; } },
          { txt: "+40 Vàng 🪙", run: () => { this.player.coins += 40; } }
        ];
        const chosen = gifts[Math.floor(Math.random() * gifts.length)];
        box.textContent = '✨';
        chosen.run();
        this.saveProgress();
        this.showDamageNumber(box, chosen.txt, true);
      };
    });
  }

  showDefeatModal() {
    this.resultTitle.textContent = "💀 THẤT BẠI!";
    this.resultTitle.style.color = "#EF4444";
    this.resultStarsRow.innerHTML = '<span style="font-size: 1.1rem; color: #94A3B8;">Hãy ôn lại bài trong Sổ Tay nhé!</span>';
    this.resultMessage.textContent = "Bạn đã hết máu. Đừng nản lòng, hãy mở Thẻ Flashcards 🗂️ ôn bài rồi thử lại!";
    this.resultCoinsEarned.textContent = "+10 Vàng khuyến khích";
    this.player.coins += 10;
    this.saveProgress();

    this.resultModal.classList.add('show');
  }

  /* ================= FLASHCARDS SCREEN ================= */
  renderFlashcards() {
    const list = document.getElementById('flashcards-deck-list');
    if (!list) return;
    list.innerHTML = '';

    FLASHCARD_DECKS.forEach(deck => {
      const catTitle = document.createElement('div');
      catTitle.className = 'handbook-category-title';
      catTitle.innerHTML = `<span>📌</span> <span>${deck.category}</span>`;
      list.appendChild(catTitle);

      const grid = document.createElement('div');
      grid.className = 'flashcard-grid';

      deck.cards.forEach(card => {
        const item = document.createElement('div');
        item.className = 'flashcard-item';
        item.innerHTML = `
          <div class="flashcard-icon-box">${card.icon}</div>
          <div class="flashcard-word">${card.word}</div>
          <div class="flashcard-ipa">${card.ipa}</div>
          <div class="flashcard-vi">${card.vi}</div>
        `;

        item.addEventListener('click', () => {
          gameAudio.playClick();
          gameAudio.speakEnglish(`${card.word}. ${card.ex}`);
          item.style.transform = 'scale(0.95)';
          setTimeout(() => item.style.transform = 'scale(1)', 150);
        });

        grid.appendChild(item);
      });

      list.appendChild(grid);
    });
  }

  /* ================= HANDBOOK RENDERING ================= */
  renderHandbook() {
    const container = document.getElementById('handbook-content-list');
    if (!container) return;
    container.innerHTML = '';

    HANDBOOK_DATA.forEach(cat => {
      const catTitle = document.createElement('div');
      catTitle.className = 'handbook-category-title';
      catTitle.innerHTML = `<span>📌</span> <span>${cat.category}</span>`;
      container.appendChild(catTitle);

      cat.items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'handbook-card';

        const titleRow = document.createElement('div');
        titleRow.className = 'handbook-item-title';
        titleRow.innerHTML = `
          <span>${item.title}</span>
          <button class="speak-chip-btn">
            <span>🔊</span>
            <span>Nghe</span>
          </button>
        `;

        titleRow.querySelector('.speak-chip-btn').addEventListener('click', () => {
          gameAudio.speakEnglish(item.example);
        });

        const formulaBox = document.createElement('div');
        formulaBox.className = 'handbook-formula-box';
        formulaBox.textContent = item.formula;

        const exampleBox = document.createElement('div');
        exampleBox.className = 'handbook-example';
        exampleBox.textContent = `Ví dụ: ${item.example}`;

        const noteBox = document.createElement('div');
        noteBox.className = 'handbook-note';
        noteBox.textContent = `Ghi chú: ${item.note}`;

        card.appendChild(titleRow);
        card.appendChild(formulaBox);
        card.appendChild(exampleBox);
        card.appendChild(noteBox);

        container.appendChild(card);
      });
    });
  }

  /* ================= SHOP LOGIC ================= */
  renderShop() {
    const grid = document.getElementById('shop-grid');
    grid.innerHTML = '';

    SHOP_ITEMS.forEach(item => {
      const card = document.createElement('div');
      card.className = 'shop-card';

      const isSkin = item.effect.type === 'avatar';
      const isOwnedSkin = isSkin && this.player.unlockedSkins.includes(item.effect.skin);
      const isEquippedSkin = isSkin && this.player.avatarClass === item.effect.skin;

      let btnText = `Mua (${item.price} 🪙)`;
      let btnDisabled = this.player.coins < item.price;

      if (isSkin) {
        if (isEquippedSkin) {
          btnText = 'Đang Dùng ✅';
          btnDisabled = true;
        } else if (isOwnedSkin) {
          btnText = 'Mặc Đồ ✨';
          btnDisabled = false;
        }
      }

      card.innerHTML = `
        <div class="shop-item-icon">${item.icon}</div>
        <div class="shop-item-info">
          <div class="shop-item-name">${item.name}</div>
          <div class="shop-item-desc">${item.description}</div>
        </div>
        <button class="shop-buy-btn" id="buy-btn-${item.id}" ${btnDisabled ? 'disabled' : ''}>
          ${btnText}
        </button>
      `;

      card.querySelector(`#buy-btn-${item.id}`).addEventListener('click', () => {
        this.buyShopItem(item);
      });

      grid.appendChild(card);
    });
  }

  buyShopItem(item) {
    const isSkin = item.effect.type === 'avatar';
    const isOwnedSkin = isSkin && this.player.unlockedSkins.includes(item.effect.skin);

    if (isSkin && isOwnedSkin) {
      this.player.avatarClass = item.effect.skin;
      gameAudio.playCoin();
      this.saveProgress();
      this.renderShop();
      return;
    }

    if (this.player.coins < item.price) return;

    this.player.coins -= item.price;
    gameAudio.playCoin();

    if (item.effect.type === 'heal') {
      this.player.inventory.potion_hp = (this.player.inventory.potion_hp || 0) + 1;
    } else if (item.effect.type === 'shield') {
      this.player.inventory.shield_protect = (this.player.inventory.shield_protect || 0) + 1;
    } else if (item.effect.type === 'hint') {
      this.player.inventory.hint_scroll = (this.player.inventory.hint_scroll || 0) + 1;
    } else if (isSkin) {
      this.player.unlockedSkins.push(item.effect.skin);
      this.player.avatarClass = item.effect.skin;
    }

    this.saveProgress();
    this.renderShop();
  }

  /* ================= CONFETTI CANVAS VFX ================= */
  initConfetti() {
    if (!this.confettiCanvas) return;
    this.confettiCanvas.width = this.confettiCanvas.offsetWidth || 430;
    this.confettiCanvas.height = this.confettiCanvas.offsetHeight || 880;
  }

  startConfetti() {
    if (!this.confettiCanvas || !this.confettiCtx) return;
    this.initConfetti();
    this.confettiParticles = [];
    const colors = ['#EF4444', '#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899', '#FDE047'];

    for (let i = 0; i < 75; i++) {
      this.confettiParticles.push({
        x: Math.random() * this.confettiCanvas.width,
        y: Math.random() * -100,
        r: Math.random() * 5 + 3,
        d: Math.random() * 50,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.random() * 10 - 10,
        tiltAngleIncrement: Math.random() * 0.07 + 0.05,
        tiltAngle: 0
      });
    }

    const draw = () => {
      this.confettiCtx.clearRect(0, 0, this.confettiCanvas.width, this.confettiCanvas.height);
      this.confettiParticles.forEach((p, idx) => {
        p.tiltAngle += p.tiltAngleIncrement;
        p.y += (Math.cos(p.d) + 3 + p.r / 2) / 1.5;
        p.x += Math.sin(p.d);
        p.tilt = Math.sin(p.tiltAngle) * 12;

        this.confettiCtx.beginPath();
        this.confettiCtx.lineWidth = p.r;
        this.confettiCtx.strokeStyle = p.color;
        this.confettiCtx.moveTo(p.x + p.tilt + p.r / 4, p.y);
        this.confettiCtx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 4);
        this.confettiCtx.stroke();

        if (p.y > this.confettiCanvas.height) {
          this.confettiParticles[idx].x = Math.random() * this.confettiCanvas.width;
          this.confettiParticles[idx].y = -20;
        }
      });
      this.confettiAnimId = requestAnimationFrame(draw);
    };

    if (this.confettiAnimId) cancelAnimationFrame(this.confettiAnimId);
    this.confettiAnimId = requestAnimationFrame(draw);
  }

  stopConfetti() {
    if (this.confettiAnimId) {
      cancelAnimationFrame(this.confettiAnimId);
      this.confettiAnimId = null;
    }
    if (this.confettiCtx && this.confettiCanvas) {
      this.confettiCtx.clearRect(0, 0, this.confettiCanvas.width, this.confettiCanvas.height);
    }
  }
}

// Initialize Game
document.addEventListener('DOMContentLoaded', () => {
  window.questGame = new EnglishQuestGame();
});
