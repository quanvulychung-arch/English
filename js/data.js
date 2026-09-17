/**
 * Comprehensive 30 Stages Knowledge Data store for English Quest - Grade 5 & Beyond
 * Spanning 6 Chapters with 180+ Questions, Progressive Difficulty, Rich SVG Icons & Boss Battles
 */

// SVG Visual Assets
const SVGIcons = {
  // Avatars
  knight: `<svg viewBox="0 0 100 100" class="game-svg"><circle cx="50" cy="50" r="45" fill="#3B82F6"/><circle cx="50" cy="40" r="22" fill="#FFE0B2"/><rect x="35" y="25" width="30" height="15" rx="5" fill="#64748B"/><rect x="42" y="32" width="16" height="4" fill="#1E293B"/><path d="M30 65 Q50 85 70 65 L65 95 L35 95 Z" fill="#2563EB"/><circle cx="43" cy="42" r="3" fill="#1E293B"/><circle cx="57" cy="42" r="3" fill="#1E293B"/><path d="M46 50 Q50 54 54 50" stroke="#E11D48" stroke-width="2" fill="none"/><polygon points="50,5 60,25 40,25" fill="#F59E0B"/></svg>`,
  wizard: `<svg viewBox="0 0 100 100" class="game-svg"><circle cx="50" cy="50" r="45" fill="#8B5CF6"/><circle cx="50" cy="42" r="22" fill="#FFE0B2"/><polygon points="50,2 25,32 75,32" fill="#6D28D9"/><circle cx="50" cy="12" r="6" fill="#FBBF24"/><circle cx="42" cy="42" r="3" fill="#1E293B"/><circle cx="58" cy="42" r="3" fill="#1E293B"/><path d="M45 52 Q50 56 55 52" stroke="#E11D48" stroke-width="2" fill="none"/><path d="M30 68 Q50 82 70 68 L68 95 L32 95 Z" fill="#7C3AED"/><polygon points="80,40 85,35 90,40 85,45" fill="#FBBF24"/></svg>`,
  archer: `<svg viewBox="0 0 100 100" class="game-svg"><circle cx="50" cy="50" r="45" fill="#10B981"/><circle cx="50" cy="42" r="22" fill="#FFE0B2"/><path d="M30 25 C35 15 65 15 70 25 C70 35 30 35 30 25" fill="#047857"/><circle cx="42" cy="42" r="3" fill="#1E293B"/><circle cx="58" cy="42" r="3" fill="#1E293B"/><path d="M46 52 Q50 55 54 52" stroke="#E11D48" stroke-width="2" fill="none"/><path d="M32 68 Q50 80 68 68 L65 95 L35 95 Z" fill="#059669"/><path d="M75 30 Q90 50 75 70" stroke="#78350F" stroke-width="4" fill="none"/></svg>`,

  // Monsters
  slime: `<svg viewBox="0 0 100 100" class="game-svg monster-svg"><ellipse cx="50" cy="65" rx="38" ry="28" fill="#10B981"/><circle cx="38" cy="58" r="6" fill="#FFFFFF"/><circle cx="62" cy="58" r="6" fill="#FFFFFF"/><circle cx="40" cy="58" r="3" fill="#064E3B"/><circle cx="64" cy="58" r="3" fill="#064E3B"/><ellipse cx="50" cy="72" rx="8" ry="4" fill="#065F46"/></svg>`,
  slimeKing: `<svg viewBox="0 0 100 100" class="game-svg monster-svg"><polygon points="35,15 50,5 65,15 60,35 40,35" fill="#FBBF24"/><ellipse cx="50" cy="65" rx="42" ry="30" fill="#059669"/><circle cx="38" cy="58" r="7" fill="#FFF"/><circle cx="62" cy="58" r="7" fill="#FFF"/><circle cx="40" cy="58" r="4" fill="#000"/><circle cx="64" cy="58" r="4" fill="#000"/></svg>`,
  wolf: `<svg viewBox="0 0 100 100" class="game-svg monster-svg"><polygon points="30,20 40,45 20,40" fill="#475569"/><polygon points="70,20 60,45 80,40" fill="#475569"/><circle cx="50" cy="55" r="30" fill="#64748B"/><polygon points="50,60 40,75 60,75" fill="#1E293B"/><circle cx="38" cy="50" r="5" fill="#EF4444"/><circle cx="62" cy="50" r="5" fill="#EF4444"/></svg>`,
  wolfBoss: `<svg viewBox="0 0 100 100" class="game-svg monster-svg"><polygon points="25,10 40,45 15,35" fill="#334155"/><polygon points="75,10 60,45 85,35" fill="#334155"/><circle cx="50" cy="55" r="35" fill="#1E293B"/><circle cx="36" cy="48" r="7" fill="#F59E0B"/><circle cx="64" cy="48" r="7" fill="#F59E0B"/><polygon points="45,68 55,68 50,78" fill="#EF4444"/></svg>`,
  pirate: `<svg viewBox="0 0 100 100" class="game-svg monster-svg"><circle cx="50" cy="50" r="32" fill="#FED7AA"/><path d="M20 30 Q50 15 80 30 L75 42 L25 42 Z" fill="#0F172A"/><circle cx="38" cy="48" r="7" fill="#000"/><circle cx="62" cy="48" r="4" fill="#1E293B"/></svg>`,
  witch: `<svg viewBox="0 0 100 100" class="game-svg monster-svg"><polygon points="50,5 20,40 80,40" fill="#4C1D95"/><circle cx="50" cy="55" r="25" fill="#86EFAC"/><circle cx="40" cy="50" r="4" fill="#991B1B"/><circle cx="60" cy="50" r="4" fill="#991B1B"/></svg>`,
  witchBoss: `<svg viewBox="0 0 100 100" class="game-svg monster-svg"><polygon points="50,2 15,38 85,38" fill="#312E81"/><circle cx="50" cy="55" r="28" fill="#A7F3D0"/><circle cx="38" cy="50" r="5" fill="#DC2626"/><circle cx="62" cy="50" r="5" fill="#DC2626"/><polygon points="50,15 45,25 55,25" fill="#FBBF24"/></svg>`,
  tiger: `<svg viewBox="0 0 100 100" class="game-svg monster-svg"><circle cx="50" cy="50" r="32" fill="#F97316"/><polygon points="25,25 35,45 20,40" fill="#EA580C"/><polygon points="75,25 65,45 80,40" fill="#EA580C"/><circle cx="38" cy="48" r="5" fill="#FEF08A"/><circle cx="62" cy="48" r="5" fill="#FEF08A"/></svg>`,
  golem: `<svg viewBox="0 0 100 100" class="game-svg monster-svg"><rect x="25" y="25" width="50" height="45" rx="10" fill="#78350F"/><rect x="35" y="40" width="10" height="8" rx="2" fill="#F59E0B"/><rect x="55" y="40" width="10" height="8" rx="2" fill="#F59E0B"/></svg>`,
  golemBoss: `<svg viewBox="0 0 100 100" class="game-svg monster-svg"><rect x="20" y="20" width="60" height="55" rx="12" fill="#451A03"/><rect x="32" y="38" width="14" height="10" rx="3" fill="#EF4444"/><rect x="54" y="38" width="14" height="10" rx="3" fill="#EF4444"/><polygon points="50,5 40,20 60,20" fill="#F59E0B"/></svg>`,
  robot: `<svg viewBox="0 0 100 100" class="game-svg monster-svg"><rect x="25" y="25" width="50" height="45" rx="8" fill="#334155"/><circle cx="50" cy="15" r="5" fill="#EF4444"/><rect x="32" y="38" width="14" height="10" fill="#06B6D4"/><rect x="54" y="38" width="14" height="10" fill="#06B6D4"/></svg>`,
  robotBoss: `<svg viewBox="0 0 100 100" class="game-svg monster-svg"><rect x="20" y="20" width="60" height="50" rx="10" fill="#0F172A"/><rect x="30" y="35" width="16" height="12" fill="#E11D48"/><rect x="54" y="35" width="16" height="12" fill="#E11D48"/><line x1="30" y1="58" x2="70" y2="58" stroke="#00F0FF" stroke-width="4"/></svg>`,
  frostGiant: `<svg viewBox="0 0 100 100" class="game-svg monster-svg"><circle cx="50" cy="50" r="35" fill="#0284C7"/><circle cx="38" cy="45" r="6" fill="#E0F2FE"/><circle cx="62" cy="45" r="6" fill="#E0F2FE"/></svg>`,
  dragon: `<svg viewBox="0 0 100 100" class="game-svg monster-svg"><path d="M15 35 Q5 15 25 25 Q35 15 45 35 Z" fill="#DC2626"/><path d="M85 35 Q95 15 75 25 Q65 15 55 35 Z" fill="#DC2626"/><circle cx="50" cy="55" r="35" fill="#991B1B"/><circle cx="36" cy="48" r="7" fill="#FEF08A"/><circle cx="64" cy="48" r="7" fill="#FEF08A"/></svg>`,
  ultimateDragon: `<svg viewBox="0 0 100 100" class="game-svg monster-svg"><polygon points="10,20 30,10 30,40" fill="#7F1D1D"/><polygon points="90,20 70,10 70,40" fill="#7F1D1D"/><circle cx="50" cy="50" r="40" fill="#450A0A"/><circle cx="34" cy="42" r="8" fill="#FDE047"/><circle cx="66" cy="42" r="8" fill="#FDE047"/><polygon points="50,60 40,75 60,75" fill="#EA580C"/><polygon points="50,2 42,20 58,20" fill="#F59E0B"/></svg>`,

  // Topic Icons
  addressHouse: `<svg viewBox="0 0 80 80" class="vocab-svg"><polygon points="40,15 15,38 65,38" fill="#EF4444"/><rect x="22" y="38" width="36" height="30" fill="#FDE047"/><rect x="34" y="48" width="12" height="20" fill="#78350F"/></svg>`,
  brushTeeth: `<svg viewBox="0 0 80 80" class="vocab-svg"><rect x="15" y="45" width="50" height="12" rx="6" fill="#38BDF8"/><rect x="50" y="25" width="15" height="25" rx="3" fill="#F8FAFC"/></svg>`,
  morningExercise: `<svg viewBox="0 0 80 80" class="vocab-svg"><circle cx="40" cy="20" r="10" fill="#F59E0B"/><line x1="40" y1="30" x2="40" y2="55" stroke="#3B82F6" stroke-width="6" stroke-linecap="round"/></svg>`,
  trainTravel: `<svg viewBox="0 0 80 80" class="vocab-svg"><rect x="18" y="22" width="44" height="42" rx="8" fill="#3B82F6"/><circle cx="28" cy="52" r="4" fill="#FDE047"/><circle cx="52" cy="52" r="4" fill="#FDE047"/></svg>`,
  birthdayCake: `<svg viewBox="0 0 80 80" class="vocab-svg"><rect x="20" y="42" width="40" height="24" rx="4" fill="#F472B6"/><rect x="25" y="30" width="30" height="12" rx="3" fill="#FBBF24"/><circle cx="40" cy="18" r="3" fill="#FDE047"/></svg>`,
  science: `<svg viewBox="0 0 80 80" class="vocab-svg"><path d="M32 15 L48 15 L48 30 L62 60 C64 65 60 70 54 70 L26 70 C20 70 16 65 18 60 L32 30 Z" fill="#818CF8" opacity="0.3" stroke="#4F46E5" stroke-width="3"/></svg>`,
  readingStory: `<svg viewBox="0 0 80 80" class="vocab-svg"><path d="M15 25 Q40 30 40 65 Q40 30 65 25 L65 55 Q40 60 40 72 Q40 60 15 55 Z" fill="#F59E0B" stroke="#B45309" stroke-width="2"/></svg>`,
  peacock: `<svg viewBox="0 0 80 80" class="vocab-svg"><path d="M15 45 C15 15 65 15 65 45 Z" fill="#0D9488"/><circle cx="40" cy="36" r="8" fill="#1D4ED8"/></svg>`,
  toothache: `<svg viewBox="0 0 80 80" class="vocab-svg"><path d="M25 25 C20 45 28 65 32 65 C36 65 36 50 40 50 C44 50 44 65 48 65 C52 65 60 45 55 25 Z" fill="#F8FAFC" stroke="#94A3B8" stroke-width="3"/></svg>`,
  noodles: `<svg viewBox="0 0 80 80" class="vocab-svg"><path d="M15 35 C15 65 65 65 65 35 Z" fill="#EF4444"/><ellipse cx="40" cy="35" rx="25" ry="8" fill="#FDE047"/></svg>`,
  astronaut: `<svg viewBox="0 0 80 80" class="vocab-svg"><circle cx="40" cy="40" r="30" fill="#E2E8F0"/><circle cx="40" cy="38" r="18" fill="#0284C7"/></svg>`,
  pilot: `<svg viewBox="0 0 80 80" class="vocab-svg"><circle cx="40" cy="45" r="22" fill="#FED7AA"/><path d="M20 38 Q40 20 60 38 L60 30 Q40 16 20 30 Z" fill="#1E293B"/></svg>`,
  mapLocation: `<svg viewBox="0 0 80 80" class="vocab-svg"><path d="M40 15 C28 15 20 23 20 35 C20 48 40 68 40 68 C40 68 60 48 60 35 C60 23 52 15 40 15 Z" fill="#EF4444"/><circle cx="40" cy="35" r="8" fill="#FFF"/></svg>`,
  weatherSunny: `<svg viewBox="0 0 80 80" class="vocab-svg"><circle cx="40" cy="40" r="16" fill="#FBBF24"/></svg>`,
  pagoda: `<svg viewBox="0 0 80 80" class="vocab-svg"><polygon points="40,15 20,25 60,25" fill="#EF4444"/><rect x="28" y="25" width="24" height="10" fill="#FDE047"/></svg>`,
  sports: `<svg viewBox="0 0 80 80" class="vocab-svg"><circle cx="40" cy="40" r="26" fill="#F8FAFC" stroke="#0F172A" stroke-width="3"/></svg>`
};

// 30 Comprehensive Progressive Stages
const GAME_STAGES = [
  // CHAPTER 1: HOMETOWN & LIFE (Ải 1 -> 5)
  {
    id: 1,
    chapter: 1,
    chapterName: "Chương I: Bản Làng & Đời Sống",
    name: "Ải 1: Địa Chỉ & Quê Hương",
    description: "Hỏi thăm địa chỉ, số nhà, làng quê (Unit 1)",
    themeColor: "#10B981",
    monster: { name: "Quái Slime Nhí", icon: SVGIcons.slime, maxHp: 90, attackPower: 8 },
    questions: [
      {
        id: "1_1", type: "picture_choice", title: "Hỏi số nhà:", icon: SVGIcons.addressHouse,
        questionText: "What's your address? - It's 105 Hoa Binh ______.",
        audioText: "It is 105 Hoa Binh Lane.", options: ["Lane", "Tower", "Floor", "City"],
        correctIndex: 0, explanation: "'Lane' = ngõ/hẻm (Số 105 ngõ Hòa Bình)."
      },
      {
        id: "1_2", type: "picture_choice", title: "Căn hộ chung cư:", icon: SVGIcons.addressHouse,
        questionText: "He lives in Flat 8 on the second ______ of Ha Noi Tower.",
        audioText: "He lives in Flat 8 on the second floor.", options: ["floor", "street", "village", "sea"],
        correctIndex: 0, explanation: "'Floor' = tầng nhà."
      },
      {
        id: "1_3", type: "sentence_scramble", title: "Sắp xếp câu:",
        questionText: "Ghép câu: Ngôi làng nhỏ và yên bình.",
        audioText: "The village is small and quiet.", words: ["The", "village", "is", "small", "and", "quiet."],
        correctOrder: ["The", "village", "is", "small", "and", "quiet."], explanation: "'Quiet' = yên bình."
      },
      {
        id: "1_4", type: "listening_quiz", title: "Luyện nghe quê quán:",
        audioText: "Where are you from? I am from Da Nang City in Viet Nam.",
        questionText: "Where is Mai from? - She is from ______.", options: ["Da Nang City", "Ha Noi", "London", "Tokyo"],
        correctIndex: 0, explanation: "Đáp án nghe được là 'Da Nang City'."
      }
    ]
  },
  {
    id: 2,
    chapter: 1,
    chapterName: "Chương I: Bản Làng & Đời Sống",
    name: "Ải 2: Thói Quen Hàng Ngày",
    description: "Thói quen buổi sáng & hoạt động thường ngày (Unit 2)",
    themeColor: "#059669",
    monster: { name: "Sói Đồng Cỏ", icon: SVGIcons.wolf, maxHp: 100, attackPower: 9 },
    questions: [
      {
        id: "2_1", type: "picture_choice", title: "Đánh răng buổi sáng:", icon: SVGIcons.brushTeeth,
        questionText: "What do you do in the morning? - I always ______.",
        audioText: "I always brush my teeth.", options: ["brush my teeth", "cook dinner", "go to sleep", "play games"],
        correctIndex: 0, explanation: "'Brush teeth' = đánh răng."
      },
      {
        id: "2_2", type: "picture_choice", title: "Tập thể dục:", icon: SVGIcons.morningExercise,
        questionText: "Nam often does ______ before breakfast.",
        audioText: "Nam often does morning exercise.", options: ["morning exercise", "homework", "shopping", "chess"],
        correctIndex: 0, explanation: "'Do morning exercise' = tập thể dục sáng."
      },
      {
        id: "2_3", type: "sentence_scramble", title: "Sắp xếp câu:",
        questionText: "Ghép câu: Tôi đạp xe đến trường mỗi ngày.",
        audioText: "I ride my bicycle to school every day.", words: ["I", "ride", "my", "bicycle", "to", "school", "every", "day."],
        correctOrder: ["I", "ride", "my", "bicycle", "to", "school", "every", "day."], explanation: "'Ride bicycle' = đạp xe đạp."
      },
      {
        id: "2_4", type: "listening_quiz", title: "Luyện nghe:",
        audioText: "What do you do in your free time? I usually surf the Internet.",
        questionText: "In his free time, he usually ______.", options: ["surfs the Internet", "reads books", "cooks", "swims"],
        correctIndex: 0, explanation: "'Surf the Internet' = lướt mạng."
      }
    ]
  },
  {
    id: 3,
    chapter: 1,
    chapterName: "Chương I: Bản Làng & Đời Sống",
    name: "Ải 3: Tần Suất Hoạt Động",
    description: "Hỏi và nói về mức độ thường xuyên (How often?)",
    themeColor: "#047857",
    monster: { name: "Bóng Ma Rừng Rậm", icon: SVGIcons.slime, maxHp: 110, attackPower: 10 },
    questions: [
      {
        id: "3_1", type: "picture_choice", title: "Học cùng bạn:", icon: SVGIcons.readingStory,
        questionText: "How often do you study with a partner? - ______ a week.",
        audioText: "Twice a week.", options: ["Twice", "Two", "Second", "Twelfth"],
        correctIndex: 0, explanation: "'Twice a week' = 2 lần một tuần."
      },
      {
        id: "3_2", type: "listening_quiz", title: "Luyện nghe:",
        audioText: "How often do you go to the library? I go once a month.",
        questionText: "How often does she go to the library? - ______ a month.", options: ["Once", "One", "First", "Never"],
        correctIndex: 0, explanation: "'Once a month' = 1 lần một tháng."
      },
      {
        id: "3_3", type: "sentence_scramble", title: "Sắp xếp câu:",
        questionText: "Ghép câu: Tôi luôn luôn đi học đúng giờ.",
        audioText: "I always go to school on time.", words: ["I", "always", "go", "to", "school", "on", "time."],
        correctOrder: ["I", "always", "go", "to", "school", "on", "time."], explanation: "'On time' = đúng giờ."
      },
      {
        id: "3_4", type: "picture_choice", title: "Xem TV:", icon: SVGIcons.readingStory,
        questionText: "He ______ plays football after school.",
        audioText: "He often plays football after school.", options: ["often", "every", "once", "twice"],
        correctIndex: 0, explanation: "'Often' = thường xuyên."
      }
    ]
  },
  {
    id: 4,
    chapter: 1,
    chapterName: "Chương I: Bản Làng & Đời Sống",
    name: "Ải 4: Gia Đình & Việc Nhà",
    description: "Công việc giúp đỡ gia đình (Helping at home)",
    themeColor: "#0D9488",
    monster: { name: "Quái Đá Rêu Xanh", icon: SVGIcons.golem, maxHp: 120, attackPower: 11 },
    questions: [
      {
        id: "4_1", type: "picture_choice", title: "Nấu ăn bữa tối:", icon: SVGIcons.noodles,
        questionText: "In the evening, I usually help my mother ______ dinner.",
        audioText: "I usually cook dinner.", options: ["cook", "wash", "eat", "play"],
        correctIndex: 0, explanation: "'Cook dinner' = nấu bữa tối."
      },
      {
        id: "4_2", type: "sentence_scramble", title: "Sắp xếp câu:",
        questionText: "Ghép câu: Tôi thường tưới hoa vào buổi chiều.",
        audioText: "I often water the flowers in the afternoon.", words: ["I", "often", "water", "the", "flowers", "in", "the", "afternoon."],
        correctOrder: ["I", "often", "water", "the", "flowers", "in", "the", "afternoon."], explanation: "'Water flowers' = tưới hoa."
      },
      {
        id: "4_3", type: "listening_quiz", title: "Luyện nghe:",
        audioText: "What does your father do in his free time? He cleans the house.",
        questionText: "His father often ______ in his free time.", options: ["cleans the house", "goes fishing", "watches films", "sleeps"],
        correctIndex: 0, explanation: "'Cleans the house' = dọn dẹp nhà."
      },
      {
        id: "4_4", type: "picture_choice", title: "Rửa bát đĩa:", icon: SVGIcons.brushTeeth,
        questionText: "After meals, we ______ the dishes.",
        audioText: "We wash the dishes.", options: ["wash", "make", "take", "do"],
        correctIndex: 0, explanation: "'Wash the dishes' = rửa bát đĩa."
      }
    ]
  },
  {
    id: 5,
    chapter: 1,
    chapterName: "Chương I: Bản Làng & Đời Sống",
    name: "Ải 5: [TRÙM I] Vua Slime Rừng Rậm",
    description: "Thử thách Đấu Trùm Tổng kết Chương 1!",
    themeColor: "#059669",
    monster: { name: "Vua Slime Khổng Lồ", icon: SVGIcons.slimeKing, maxHp: 160, attackPower: 14 },
    questions: [
      {
        id: "5_1", type: "picture_choice", title: "Hỏi quê quán:", icon: SVGIcons.addressHouse,
        questionText: "Where do you live? - I live in a ______ in the countryside.",
        audioText: "I live in a small cottage in the countryside.", options: ["village", "ocean", "cloud", "tree"],
        correctIndex: 0, explanation: "'Village' = ngôi làng."
      },
      {
        id: "5_2", type: "sentence_scramble", title: "Chiêu Đao Phép:",
        questionText: "Ghép câu: Bạn làm gì sau giờ học?",
        audioText: "What do you do after school?", words: ["What", "do", "you", "do", "after", "school?"],
        correctOrder: ["What", "do", "you", "do", "after", "school?"], explanation: "Mẫu câu: What do you do after school?"
      },
      {
        id: "5_3", type: "listening_quiz", title: "Đòn Sấm Sét:",
        audioText: "How often do you go swimming? I go swimming three times a week.",
        questionText: "How often does he go swimming? - ______ a week.", options: ["three times", "once", "twice", "every day"],
        correctIndex: 0, explanation: "'Three times a week' = 3 lần/tuần."
      },
      {
        id: "5_4", type: "picture_choice", title: "Đòn Quyết Định:", icon: SVGIcons.brushTeeth,
        questionText: "She always ______ her face before going to school.",
        audioText: "She washes her face.", options: ["washes", "wash", "washing", "washed"],
        correctIndex: 0, explanation: "Chủ ngữ 'She' thì động từ thêm -es: 'washes'."
      }
    ]
  },

  // CHAPTER 2: HOLIDAYS & PAST SIMPLE (Ải 6 -> 10)
  {
    id: 6,
    chapter: 2,
    chapterName: "Chương II: Kỳ Nghỉ & Quá Khứ",
    name: "Ải 6: Chuyến Đi Nghỉ Mát",
    description: "Kể về các chuyến đi tham quan (Unit 3)",
    themeColor: "#0284C7",
    monster: { name: "Hải Tặc Đảo Hoang", icon: SVGIcons.pirate, maxHp: 130, attackPower: 12 },
    questions: [
      {
        id: "6_1", type: "picture_choice", title: "Vịnh Hạ Long:", icon: SVGIcons.trainTravel,
        questionText: "Where did you go on holiday? - I went to ______.",
        audioText: "I went to Ha Long Bay.", options: ["Ha Long Bay", "Phu Quoc", "Hue", "Da Lat"],
        correctIndex: 0, explanation: "'Ha Long Bay' = Vịnh Hạ Long."
      },
      {
        id: "6_2", type: "sentence_scramble", title: "Sắp xếp câu:",
        questionText: "Ghép câu: Chuyến đi thật là tuyệt vời.",
        audioText: "The holiday was really great.", words: ["The", "holiday", "was", "really", "great."],
        correctOrder: ["The", "holiday", "was", "really", "great."], explanation: "'Really great' = thật sự tuyệt vời."
      },
      {
        id: "6_3", type: "listening_quiz", title: "Luyện nghe:",
        audioText: "Where did Tony go last weekend? He went to Hoi An Ancient Town.",
        questionText: "Tony went to ______.", options: ["Hoi An Ancient Town", "Nha Trang", "Ha Noi", "Sapa"],
        correctIndex: 0, explanation: "'Hoi An Ancient Town' = Phố cổ Hội An."
      },
      {
        id: "6_4", type: "picture_choice", title: "Đảo ngọc Phú Quốc:", icon: SVGIcons.trainTravel,
        questionText: "Last month, Linda visited Phu Quoc ______.",
        audioText: "Linda visited Phu Quoc Island.", options: ["Island", "Mountain", "Tower", "Street"],
        correctIndex: 0, explanation: "'Phu Quoc Island' = Đảo Phú Quốc."
      }
    ]
  },
  {
    id: 7,
    chapter: 2,
    chapterName: "Chương II: Kỳ Nghỉ & Quá Khứ",
    name: "Ải 7: Phương Tiện Giao Thông",
    description: "Cách di chuyển bằng tàu hỏa, máy bay, xe khách (Unit 4)",
    themeColor: "#0369A1",
    monster: { name: "Thủy Quái Sông Sâu", icon: SVGIcons.pirate, maxHp: 140, attackPower: 13 },
    questions: [
      {
        id: "7_1", type: "picture_choice", title: "Đi tàu hỏa:", icon: SVGIcons.trainTravel,
        questionText: "How did you get there? - I went by ______.",
        audioText: "I went by train.", options: ["train", "plane", "taxi", "motorbike"],
        correctIndex: 0, explanation: "'By train' = bằng tàu hỏa."
      },
      {
        id: "7_2", type: "picture_choice", title: "Đi máy bay:", icon: SVGIcons.pilot,
        questionText: "We travelled from Ha Noi to Ho Chi Minh City by ______.",
        audioText: "We travelled by plane.", options: ["plane", "bicycle", "coach", "boat"],
        correctIndex: 0, explanation: "'By plane' = bằng máy bay."
      },
      {
        id: "7_3", type: "sentence_scramble", title: "Sắp xếp câu:",
        questionText: "Ghép câu: Mai về quê bằng xe khách.",
        audioText: "Mai went to her hometown by coach.", words: ["Mai", "went", "to", "her", "hometown", "by", "coach."],
        correctOrder: ["Mai", "went", "to", "her", "hometown", "by", "coach."], explanation: "'By coach' = bằng xe khách."
      },
      {
        id: "7_4", type: "listening_quiz", title: "Luyện nghe:",
        audioText: "How did they get to the island? They took a boat.",
        questionText: "They got there by ______.", options: ["boat", "car", "bus", "train"],
        correctIndex: 0, explanation: "'Took a boat' = đi thuyền/tàu thủy."
      }
    ]
  },
  {
    id: 8,
    chapter: 2,
    chapterName: "Chương II: Kỳ Nghỉ & Quá Khứ",
    name: "Ải 8: Bữa Tiệc Sinh Nhật",
    description: "Kể về bữa tiệc & các món ăn trong tiệc (Unit 5)",
    themeColor: "#EC4899",
    monster: { name: "Bóng Ma Tiệc Tùng", icon: SVGIcons.ghost, maxHp: 145, attackPower: 13 },
    questions: [
      {
        id: "8_1", type: "picture_choice", title: "Bánh kem:", icon: SVGIcons.birthdayCake,
        questionText: "Did you go to the birthday party? - Yes, ______.",
        audioText: "Yes, I did.", options: ["I did", "I do", "I didn't", "I am"],
        correctIndex: 0, explanation: "Trả lời khẳng định: 'Yes, I did'."
      },
      {
        id: "8_2", type: "picture_choice", title: "Ăn đồ ngon:", icon: SVGIcons.birthdayCake,
        questionText: "We ______ delicious fruit and sweets at the party.",
        audioText: "We ate delicious fruit.", options: ["ate", "eat", "eating", "eats"],
        correctIndex: 0, explanation: "'Ate' là quá khứ của 'eat'."
      },
      {
        id: "8_3", type: "sentence_scramble", title: "Sắp xếp câu:",
        questionText: "Ghép câu: Chúng tôi đã hát bài hát sinh nhật.",
        audioText: "We sang the birthday song happily.", words: ["We", "sang", "the", "birthday", "song", "happily."],
        correctOrder: ["We", "sang", "the", "birthday", "song", "happily."], explanation: "'Sang' là quá khứ của 'sing'."
      },
      {
        id: "8_4", type: "listening_quiz", title: "Luyện nghe:",
        audioText: "What did you do at the party? We chatted with friends.",
        questionText: "They ______ with friends at the party.", options: ["chatted", "slept", "studied", "fought"],
        correctIndex: 0, explanation: "'Chatted' = trò chuyện vui vẻ."
      }
    ]
  },
  {
    id: 9,
    chapter: 2,
    chapterName: "Chương II: Kỳ Nghỉ & Quá Khứ",
    name: "Ải 9: Hội Chợ & Trò Chơi",
    description: "Tham gia hội chợ và chơi trò chơi (Funfair & Games)",
    themeColor: "#DB2777",
    monster: { name: "Phù Thủy Hắc Ám Cấp 2", icon: SVGIcons.witch, maxHp: 155, attackPower: 14 },
    questions: [
      {
        id: "9_1", type: "picture_choice", title: "Trò trốn tìm:", icon: SVGIcons.birthdayCake,
        questionText: "We played hide-and-______ at the school festival.",
        audioText: "We played hide and seek.", options: ["seek", "look", "find", "see"],
        correctIndex: 0, explanation: "'Hide and seek' = trò chơi trốn tìm."
      },
      {
        id: "9_2", type: "sentence_scramble", title: "Sắp xếp câu:",
        questionText: "Ghép câu: Bạn đã tham gia hội chợ vui vẻ phải không?",
        audioText: "Did you join the funfair yesterday?", words: ["Did", "you", "join", "the", "funfair", "yesterday?"],
        correctOrder: ["Did", "you", "join", "the", "funfair", "yesterday?"], explanation: "Mẫu câu: Did you join the funfair...?"
      },
      {
        id: "9_3", type: "listening_quiz", title: "Luyện nghe:",
        audioText: "Did you enjoy the party? Yes, we enjoyed it very much.",
        questionText: "Did they enjoy the festival? - Yes, ______.", options: ["they did", "they do", "they didn't", "they are"],
        correctIndex: 0, explanation: "'Yes, they did'."
      },
      {
        id: "9_4", type: "picture_choice", title: "Xem phim hoạt hình:", icon: SVGIcons.readingStory,
        questionText: "Last night, I ______ an exciting cartoon on TV.",
        audioText: "I watched an exciting cartoon.", options: ["watched", "watch", "watches", "watching"],
        correctIndex: 0, explanation: "Quá khứ của watch là 'watched'."
      }
    ]
  },
  {
    id: 10,
    chapter: 2,
    chapterName: "Chương II: Kỳ Nghỉ & Quá Khứ",
    name: "Ải 10: [TRÙM II] Sói Ma Nanh Bạc",
    description: "Đại Chiến Boss Tổng kết Thì Quá Khứ Đơn!",
    themeColor: "#334155",
    monster: { name: "Sói Ma Nanh Bạc Chúa Tễ", icon: SVGIcons.wolfBoss, maxHp: 190, attackPower: 16 },
    questions: [
      {
        id: "10_1", type: "picture_choice", title: "Đòn Chém Băng:", icon: SVGIcons.trainTravel,
        questionText: "Where ______ you go last weekend? - I went to the beach.",
        audioText: "Where did you go?", options: ["did", "do", "does", "are"],
        correctIndex: 0, explanation: "Trợ động từ quá khứ là 'did'."
      },
      {
        id: "10_2", type: "sentence_scramble", title: "Đòn Sấm Sét:",
        questionText: "Ghép câu: Chúng tôi đã có một khoảng thời gian tuyệt vời.",
        audioText: "We had a wonderful time in Da Nang.", words: ["We", "had", "a", "wonderful", "time", "in", "Da", "Nang."],
        correctOrder: ["We", "had", "a", "wonderful", "time", "in", "Da", "Nang."], explanation: "'Had a wonderful time' = có khoảng thời gian tuyệt vời."
      },
      {
        id: "10_3", type: "listening_quiz", title: "Đòn Hộ Thể:",
        audioText: "Did you buy any souvenirs? Yes, I bought some postcards.",
        questionText: "What did she buy? - Some ______.", options: ["postcards", "candies", "clothes", "toys"],
        correctIndex: 0, explanation: "'Postcards' = bưu thiếp."
      },
      {
        id: "10_4", type: "picture_choice", title: "Đòn Tuyệt Kỹ:", icon: SVGIcons.birthdayCake,
        questionText: "Quá khứ của 'see' là gì?",
        audioText: "I saw a big elephant.", options: ["saw", "seen", "seeing", "seed"],
        correctIndex: 0, explanation: "'See' ➔ 'Saw'."
      }
    ]
  },

  // CHAPTER 3: SCHOOL & ENGLISH SKILLS (Ải 11 -> 15)
  {
    id: 11,
    chapter: 3,
    chapterName: "Chương III: Trường Lớp & Kỹ Năng",
    name: "Ải 11: Môn Học Yêu Thích",
    description: "Thời khóa biểu & các môn học (Unit 6)",
    themeColor: "#8B5CF6",
    monster: { name: "Sách Cổ Ma Thuật", icon: SVGIcons.readingStory, maxHp: 150, attackPower: 14 },
    questions: [
      {
        id: "11_1", type: "picture_choice", title: "Môn Khoa học:", icon: SVGIcons.science,
        questionText: "How many lessons do you have today? - I have Maths, IT and ______.",
        audioText: "I have Science.", options: ["Science", "Dinner", "Football", "Bed"],
        correctIndex: 0, explanation: "'Science' = môn Khoa học."
      },
      {
        id: "11_2", type: "picture_choice", title: "Môn Tin học:", icon: SVGIcons.science,
        questionText: "We learn how to use computers in ______ lesson.",
        audioText: "In Informatics lesson.", options: ["IT", "PE", "Music", "Art"],
        correctIndex: 0, explanation: "'IT' (Tin học) = Information Technology."
      },
      {
        id: "11_3", type: "sentence_scramble", title: "Sắp xếp câu:",
        questionText: "Ghép câu: Tôi học môn Tiếng Anh bốn lần một tuần.",
        audioText: "I have English four times a week.", words: ["I", "have", "English", "four", "times", "a", "week."],
        correctOrder: ["I", "have", "English", "four", "times", "a", "week."], explanation: "'Four times a week' = 4 lần/tuần."
      },
      {
        id: "11_4", type: "listening_quiz", title: "Luyện nghe:",
        audioText: "How many lessons do you have on Monday? I have five lessons.",
        questionText: "How many lessons does Quan have on Monday? - ______.", options: ["Five", "Four", "Three", "Two"],
        correctIndex: 0, explanation: "'Five lessons' = 5 tiết học."
      }
    ]
  },
  {
    id: 12,
    chapter: 3,
    chapterName: "Chương III: Trường Lớp & Kỹ Năng",
    name: "Ải 12: Kỹ Năng Luyện Nói Tiếng Anh",
    description: "Phương pháp luyện nói & giao tiếp tiếng Anh (Unit 7)",
    themeColor: "#7C3AED",
    monster: { name: "Phù Thủy Tinh Quái", icon: SVGIcons.witch, maxHp: 155, attackPower: 14 },
    questions: [
      {
        id: "12_1", type: "picture_choice", title: "Nói chuyện với bạn nước ngoài:", icon: SVGIcons.readingStory,
        questionText: "How do you practice speaking? - I practice by ______ to foreign friends.",
        audioText: "I practice by talking to foreign friends.", options: ["talking", "writing", "sleeping", "running"],
        correctIndex: 0, explanation: "'Talking to foreign friends' = nói chuyện với bạn nước ngoài."
      },
      {
        id: "12_2", type: "sentence_scramble", title: "Sắp xếp câu:",
        questionText: "Ghép câu: Tôi thường nói tiếng Anh mỗi ngày.",
        audioText: "I speak English every day with my teacher.", words: ["I", "speak", "English", "every", "day", "with", "my", "teacher."],
        correctOrder: ["I", "speak", "English", "every", "day", "with", "my", "teacher."], explanation: "Cấu trúc câu khẳng định hiện tại đơn."
      },
      {
        id: "12_3", type: "listening_quiz", title: "Luyện nghe:",
        audioText: "Why do you learn English? Because I want to sing English songs.",
        questionText: "She learns English because she wants to ______.", options: ["sing English songs", "cook", "dance", "draw"],
        correctIndex: 0, explanation: "'Sing English songs' = hát bài hát tiếng Anh."
      },
      {
        id: "12_4", type: "picture_choice", title: "Hát tiếng Anh:", icon: SVGIcons.readingStory,
        questionText: "Mai practices speaking English by singing English ______.",
        audioText: "By singing English songs.", options: ["songs", "stories", "games", "books"],
        correctIndex: 0, explanation: "'English songs' = bài hát tiếng Anh."
      }
    ]
  },
  {
    id: 13,
    chapter: 3,
    chapterName: "Chương III: Trường Lớp & Kỹ Năng",
    name: "Ải 13: Kỹ Năng Đọc & Viết",
    description: "Đọc truyện tranh & viết thư cho bạn bè",
    themeColor: "#6D28D9",
    monster: { name: "Gỗ Mục Đầm Lầy", icon: SVGIcons.golem, maxHp: 160, attackPower: 15 },
    questions: [
      {
        id: "13_1", type: "picture_choice", title: "Đọc truyện tranh:", icon: SVGIcons.readingStory,
        questionText: "I learn to read by reading English ______ books.",
        audioText: "By reading English comic books.", options: ["comic", "cook", "paint", "pen"],
        correctIndex: 0, explanation: "'Comic books' = truyện tranh."
      },
      {
        id: "13_2", type: "sentence_scramble", title: "Sắp xếp câu:",
        questionText: "Ghép câu: Tôi luyện viết bằng cách viết thư điện tử cho bạn bè.",
        audioText: "I practice writing by writing emails to my penfriends.", words: ["I", "practice", "writing", "by", "writing", "emails", "to", "my", "penfriends."],
        correctOrder: ["I", "practice", "writing", "by", "writing", "emails", "to", "my", "penfriends."], explanation: "'Penfriends' = bạn qua thư."
      },
      {
        id: "13_3", type: "listening_quiz", title: "Luyện nghe:",
        audioText: "How do you learn vocabulary? I write new words in my notebook and read them aloud.",
        questionText: "He learns new words by reading them ______.", options: ["aloud", "quietly", "slowly", "badly"],
        correctIndex: 0, explanation: "'Read aloud' = đọc to, đọc thành tiếng."
      },
      {
        id: "13_4", type: "picture_choice", title: "Xem phim hoạt hình:", icon: SVGIcons.readingStory,
        questionText: "I practice listening by watching English ______ on TV.",
        audioText: "By watching cartoons.", options: ["cartoons", "pictures", "drawings", "notebooks"],
        correctIndex: 0, explanation: "'Cartoons' = phim hoạt hình."
      }
    ]
  },
  {
    id: 14,
    chapter: 3,
    chapterName: "Chương III: Trường Lớp & Kỹ Năng",
    name: "Ải 14: Truyện Cổ Tích & Ngụ Ngôn",
    description: "Nhân vật cổ tích Mai An Tiêm, Tấm Cám, Cáo & Quạ (Unit 8)",
    themeColor: "#F59E0B",
    monster: { name: "Cáo Tinh Gian Xảo", icon: SVGIcons.tiger, maxHp: 165, attackPower: 15 },
    questions: [
      {
        id: "14_1", type: "picture_choice", title: "Sự tích Mai An Tiêm:", icon: SVGIcons.readingStory,
        questionText: "What are you reading? - I'm reading The Story of ______.",
        audioText: "The Story of Mai An Tiem.", options: ["Mai An Tiem", "Doraemon", "Batman", "Spider"],
        correctIndex: 0, explanation: "'The Story of Mai An Tiem' = Sự tích dưa hấu Mai An Tiêm."
      },
      {
        id: "14_2", type: "picture_choice", title: "Tính cách chăm chỉ:", icon: SVGIcons.readingStory,
        questionText: "What is An Tiem like? - He is ______ and brave.",
        audioText: "He is hard-working.", options: ["hard-working", "lazy", "cruel", "greedy"],
        correctIndex: 0, explanation: "'Hard-working' = chăm chỉ."
      },
      {
        id: "14_3", type: "sentence_scramble", title: "Sắp xếp câu:",
        questionText: "Ghép câu: Cô Tấm rất dịu dàng và tốt bụng.",
        audioText: "Tam is gentle and kind.", words: ["Tam", "is", "gentle", "and", "kind."],
        correctOrder: ["Tam", "is", "gentle", "and", "kind."], explanation: "'Gentle' = dịu dàng; 'kind' = tốt bụng."
      },
      {
        id: "14_4", type: "listening_quiz", title: "Luyện nghe:",
        audioText: "What happened in the story? In the end, the prince married the beautiful girl.",
        questionText: "In the end, the prince ______ the girl.", options: ["married", "helped", "called", "left"],
        correctIndex: 0, explanation: "'Married' = kết hôn."
      }
    ]
  },
  {
    id: 15,
    chapter: 3,
    chapterName: "Chương III: Trường Lớp & Kỹ Năng",
    name: "Ải 15: [TRÙM III] Phù Thủy Tối Cao",
    description: "Đại Chiến Boss Tổng kết Kỹ Năng Nghe Nói Đọc Viết!",
    themeColor: "#4C1D95",
    monster: { name: "Nữ Hoàng Phù Thủy Hắc Ám", icon: SVGIcons.witchBoss, maxHp: 210, attackPower: 18 },
    questions: [
      {
        id: "15_1", type: "picture_choice", title: "Đòn Triệt Hạ:", icon: SVGIcons.science,
        questionText: "Why do you learn English? - ______ I want to communicate with friends all over the world.",
        audioText: "Because I want to communicate.", options: ["Because", "So", "And", "But"],
        correctIndex: 0, explanation: "Câu hỏi 'Why' trả lời bằng 'Because'."
      },
      {
        id: "15_2", type: "sentence_scramble", title: "Đòn Băng Phong:",
        questionText: "Ghép câu: Nàng Bạch Tuyết sống cùng bảy chú lùn.",
        audioText: "Snow White lives with seven dwarfs.", words: ["Snow", "White", "lives", "with", "seven", "dwarfs."],
        correctOrder: ["Snow", "White", "lives", "with", "seven", "dwarfs."], explanation: "'Seven dwarfs' = bảy chú lùn."
      },
      {
        id: "15_3", type: "listening_quiz", title: "Đòn Sấm Sét:",
        audioText: "How do you practice listening to English? I watch English cartoons every evening.",
        questionText: "He practices listening by watching cartoons ______.", options: ["every evening", "every year", "once a year", "never"],
        correctIndex: 0, explanation: "'Every evening' = mỗi buổi tối."
      },
      {
        id: "15_4", type: "picture_choice", title: "Đòn Tuyệt Mạng:", icon: SVGIcons.readingStory,
        questionText: "The main character in the story is very ______.",
        audioText: "The main character is clever.", options: ["clever", "lazy", "bad", "slow"],
        correctIndex: 0, explanation: "'Main character' = nhân vật chính."
      }
    ]
  },

  // CHAPTER 4: NATURE, SPORTS & HEALTH (Ải 16 -> 20)
  {
    id: 16,
    chapter: 4,
    chapterName: "Chương IV: Muông Thú & Sức Khỏe",
    name: "Ải 16: Thế Giới Động Vật Vườn Thú",
    description: "Đặc điểm các loài động vật hoang dã (Unit 9)",
    themeColor: "#EA580C",
    monster: { name: "Báo Đốm Rừng Già", icon: SVGIcons.tiger, maxHp: 165, attackPower: 15 },
    questions: [
      {
        id: "16_1", type: "picture_choice", title: "Chim công nhảy múa:", icon: SVGIcons.peacock,
        questionText: "When I was at the zoo, the peacocks danced ______.",
        audioText: "The peacocks danced beautifully.", options: ["beautifully", "loudly", "slowly", "badly"],
        correctIndex: 0, explanation: "'Beautifully' = đẹp đẽ, duyên dáng."
      },
      {
        id: "16_2", type: "picture_choice", title: "Hổ gầm vang:", icon: SVGIcons.tiger,
        questionText: "The tigers roared ______ when we saw them.",
        audioText: "The tigers roared loudly.", options: ["loudly", "quietly", "softly", "sweetly"],
        correctIndex: 0, explanation: "'Loudly' = to tiếng, vang dội."
      },
      {
        id: "16_3", type: "sentence_scramble", title: "Sắp xếp câu:",
        questionText: "Ghép câu: Những chú khỉ nhảy thoăn thoắt lên cành cây.",
        audioText: "The monkeys jumped quickly on the trees.", words: ["The", "monkeys", "jumped", "quickly", "on", "the", "trees."],
        correctOrder: ["The", "monkeys", "jumped", "quickly", "on", "the", "trees."], explanation: "'Jumped quickly' = nhảy nhanh nhẹn."
      },
      {
        id: "16_4", type: "listening_quiz", title: "Luyện nghe:",
        audioText: "What did the python do? It moved very slowly and quietly.",
        questionText: "The python moved ______.", options: ["slowly and quietly", "quickly and loudly", "fast", "noisily"],
        correctIndex: 0, explanation: "'Slowly and quietly' = chậm rãi và lặng lẽ."
      }
    ]
  },
  {
    id: 17,
    chapter: 4,
    chapterName: "Chương IV: Muông Thú & Sức Khỏe",
    name: "Ải 17: Ngày Hội Thể Thao",
    description: "Sự kiện thể thao & thi đấu (Unit 10)",
    themeColor: "#F97316",
    monster: { name: "Vượn Khổng Lồ", icon: SVGIcons.tiger, maxHp: 170, attackPower: 16 },
    questions: [
      {
        id: "17_1", type: "picture_choice", title: "Hội thao trường:", icon: SVGIcons.sports,
        questionText: "When will Sports Day be? - It will be on ______.",
        audioText: "It will be on Saturday.", options: ["Saturday", "yesterday", "ago", "last week"],
        correctIndex: 0, explanation: "Thì tương lai đi với thứ: 'on Saturday'."
      },
      {
        id: "17_2", type: "sentence_scramble", title: "Sắp xếp câu:",
        questionText: "Ghép câu: Tôi sẽ thi đấu bóng bàn vào ngày hội thể thao.",
        audioText: "I am going to play table tennis on Sports Day.", words: ["I", "am", "going", "to", "play", "table", "tennis", "on", "Sports", "Day."],
        correctOrder: ["I", "am", "going", "to", "play", "table", "tennis", "on", "Sports", "Day."], explanation: "'Table tennis' = bóng bàn."
      },
      {
        id: "17_3", type: "listening_quiz", title: "Luyện nghe:",
        audioText: "What are Phong and Nam going to do? They are going to play football.",
        questionText: "Phong and Nam are going to play ______.", options: ["football", "chess", "badminton", "volleyball"],
        correctIndex: 0, explanation: "'Play football' = đá bóng."
      },
      {
        id: "17_4", type: "picture_choice", title: "Môn cầu lông:", icon: SVGIcons.sports,
        questionText: "Mai and Linda are going to play ______.",
        audioText: "They are going to play badminton.", options: ["badminton", "swimming", "running", "skating"],
        correctIndex: 0, explanation: "'Badminton' = cầu lông."
      }
    ]
  },
  {
    id: 18,
    chapter: 4,
    chapterName: "Chương IV: Muông Thú & Sức Khỏe",
    name: "Ải 18: Bệnh Thường Gặp",
    description: "Triệu chứng đau răng, sốt, đau đầu (Unit 11)",
    themeColor: "#EF4444",
    monster: { name: "Quái Độc Sương Mù", icon: SVGIcons.golem, maxHp: 175, attackPower: 16 },
    questions: [
      {
        id: "18_1", type: "picture_choice", title: "Đau răng:", icon: SVGIcons.toothache,
        questionText: "What's the matter with you? - I have a ______.",
        audioText: "I have a toothache.", options: ["toothache", "fever", "headache", "cough"],
        correctIndex: 0, explanation: "'Toothache' = đau răng."
      },
      {
        id: "18_2", type: "picture_choice", title: "Đi khám bác sĩ:", icon: SVGIcons.toothache,
        questionText: "You have a high fever. You should see a ______.",
        audioText: "You should see a doctor.", options: ["doctor", "pilot", "driver", "farmer"],
        correctIndex: 0, explanation: "'See a doctor' = đi khám bác sĩ."
      },
      {
        id: "18_3", type: "sentence_scramble", title: "Sắp xếp câu:",
        questionText: "Ghép câu: Bạn không nên ăn quá nhiều đồ ngọt.",
        audioText: "You shouldn't eat too many sweets.", words: ["You", "shouldn't", "eat", "too", "many", "sweets."],
        correctOrder: ["You", "shouldn't", "eat", "too", "many", "sweets."], explanation: "Cấu trúc: You shouldn't + V..."
      },
      {
        id: "18_4", type: "listening_quiz", title: "Luyện nghe:",
        audioText: "What's the matter with Tony? He has a stomach ache.",
        questionText: "Tony has a ______.", options: ["stomach ache", "headache", "earache", "backache"],
        correctIndex: 0, explanation: "'Stomach ache' = đau dạ dày / đau bụng."
      }
    ]
  },
  {
    id: 19,
    chapter: 4,
    chapterName: "Chương IV: Muông Thú & Sức Khỏe",
    name: "Ải 19: An Toàn & Phòng Tai Nạn",
    description: "Tránh bỏng, ngã xe, đứt tay (Unit 12)",
    themeColor: "#DC2626",
    monster: { name: "Quỷ Lửa Địa Ngục", icon: SVGIcons.golem, maxHp: 180, attackPower: 17 },
    questions: [
      {
        id: "19_1", type: "picture_choice", title: "Phòng tránh bỏng:", icon: SVGIcons.toothache,
        questionText: "Don't play with matches! - You may ______.",
        audioText: "You may get a burn.", options: ["get a burn", "break your arm", "cut yourself", "drown"],
        correctIndex: 0, explanation: "'Get a burn' = bị bỏng."
      },
      {
        id: "19_2", type: "sentence_scramble", title: "Sắp xếp câu:",
        questionText: "Ghép câu: Đừng đi xe đạp quá nhanh!",
        audioText: "Don't ride your bike too fast!", words: ["Don't", "ride", "your", "bike", "too", "fast!"],
        correctOrder: ["Don't", "ride", "your", "bike", "too", "fast!"], explanation: "Cấu trúc: Don't + V..."
      },
      {
        id: "19_3", type: "listening_quiz", title: "Luyện nghe:",
        audioText: "Why shouldn't I play with the knife? Because you may cut yourself.",
        questionText: "You may ______ if you play with the knife.", options: ["cut yourself", "fall down", "break your leg", "burn"],
        correctIndex: 0, explanation: "'Cut yourself' = bị đứt tay."
      },
      {
        id: "19_4", type: "picture_choice", title: "Trèo cây nguy hiểm:", icon: SVGIcons.toothache,
        questionText: "Don't climb the tree! You may ______ and break your leg.",
        audioText: "You may fall down.", options: ["fall down", "fly", "sing", "run"],
        correctIndex: 0, explanation: "'Fall down' = ngã xuống."
      }
    ]
  },
  {
    id: 20,
    chapter: 4,
    chapterName: "Chương IV: Muông Thú & Sức Khỏe",
    name: "Ải 20: [TRÙM IV] Khổng Lồ Độc Dược",
    description: "Đại Chiến Boss Tổng kết Muông Thú, Thể Thao & Sức Khỏe!",
    themeColor: "#991B1B",
    monster: { name: "Vua Khổng Lồ Độc Dược", icon: SVGIcons.golemBoss, maxHp: 230, attackPower: 20 },
    questions: [
      {
        id: "20_1", type: "picture_choice", title: "Đòn Triệt Độc:", icon: SVGIcons.toothache,
        questionText: "You have a toothache. You ______ go to the dentist.",
        audioText: "You should go to the dentist.", options: ["should", "shouldn't", "don't", "can't"],
        correctIndex: 0, explanation: "Lời khuyên nên làm: 'should'."
      },
      {
        id: "20_2", type: "sentence_scramble", title: "Đòn Sấm Sét:",
        questionText: "Ghép câu: Bạn nên ăn nhiều rau củ và uống nhiều nước.",
        audioText: "You should eat a lot of fruit and vegetables.", words: ["You", "should", "eat", "a", "lot", "of", "fruit", "and", "vegetables."],
        correctOrder: ["You", "should", "eat", "a", "lot", "of", "fruit", "and", "vegetables."], explanation: "'Vegetables' = rau củ."
      },
      {
        id: "20_3", type: "listening_quiz", title: "Đòn Phong Hộ:",
        audioText: "What will they do on Sports Day? They will compete in the running race.",
        questionText: "They will compete in the ______ race.", options: ["running", "boat", "bike", "car"],
        correctIndex: 0, explanation: "'Running race' = cuộc thi chạy."
      },
      {
        id: "20_4", type: "picture_choice", title: "Đòn Kết Liễu:", icon: SVGIcons.tiger,
        questionText: "The gorillas moved ______ in the forest.",
        audioText: "The gorillas moved quickly.", options: ["quickly", "quick", "quicker", "quickest"],
        correctIndex: 0, explanation: "Bổ nghĩa cho động từ moved dùng trạng từ 'quickly'."
      }
    ]
  },

  // CHAPTER 5: FOOD, DRINKS & CAREERS (Ải 21 -> 25)
  {
    id: 21,
    chapter: 5,
    chapterName: "Chương V: Ẩm Thực & Nghề Nghiệp",
    name: "Ải 21: Nhà Hàng Ẩm Thực",
    description: "Gọi món ăn & đồ uống (Unit 13)",
    themeColor: "#D97706",
    monster: { name: "Bếp Trưởng Ma Quái", icon: SVGIcons.golem, maxHp: 180, attackPower: 16 },
    questions: [
      {
        id: "21_1", type: "picture_choice", title: "Tô mì ngon:", icon: SVGIcons.noodles,
        questionText: "What would you like to eat? - I'd like a bowl of ______.",
        audioText: "A bowl of noodles, please.", options: ["noodles", "water", "juice", "tea"],
        correctIndex: 0, explanation: "'A bowl of noodles' = một tô mì."
      },
      {
        id: "21_2", type: "picture_choice", title: "Ly nước cam:", icon: SVGIcons.noodles,
        questionText: "What would you like to drink? - A glass of ______.",
        audioText: "A glass of orange juice.", options: ["orange juice", "bread", "chicken", "rice"],
        correctIndex: 0, explanation: "'Orange juice' = nước cam ép."
      },
      {
        id: "21_3", type: "sentence_scramble", title: "Sắp xếp câu:",
        questionText: "Ghép câu: Bạn muốn dùng món gì để ăn?",
        audioText: "What would you like to eat?", words: ["What", "would", "you", "like", "to", "eat?"],
        correctOrder: ["What", "would", "you", "like", "to", "eat?"], explanation: "Mẫu câu gọi món lịch sự."
      },
      {
        id: "21_4", type: "listening_quiz", title: "Luyện nghe:",
        audioText: "Would you like some apple pie? Yes, please. I love it.",
        questionText: "She would like some ______.", options: ["apple pie", "lemonade", "coffee", "milk"],
        correctIndex: 0, explanation: "'Apple pie' = bánh táo."
      }
    ]
  },
  {
    id: 22,
    chapter: 5,
    chapterName: "Chương V: Ẩm Thực & Nghề Nghiệp",
    name: "Ải 22: Định Lượng Thức Ăn",
    description: "How many vs How much & đơn vị đo lường",
    themeColor: "#B45309",
    monster: { name: "Quái Vật Bánh Ngọt", icon: SVGIcons.golem, maxHp: 185, attackPower: 17 },
    questions: [
      {
        id: "22_1", type: "picture_choice", title: "Lượng nước uống:", icon: SVGIcons.noodles,
        questionText: "How ______ water do you drink every day? - Three bottles.",
        audioText: "How much water do you drink?", options: ["much", "many", "often", "old"],
        correctIndex: 0, explanation: "Nước không đếm được dùng 'How much'."
      },
      {
        id: "22_2", type: "picture_choice", title: "Số lượng quả chuối:", icon: SVGIcons.noodles,
        questionText: "How ______ bananas do you eat every day? - Two bananas.",
        audioText: "How many bananas do you eat?", options: ["many", "much", "long", "far"],
        correctIndex: 0, explanation: "Quả chuối đếm được dùng 'How many'."
      },
      {
        id: "22_3", type: "sentence_scramble", title: "Sắp xếp câu:",
        questionText: "Ghép câu: Cô ấy uống hai hộp sữa mỗi ngày.",
        audioText: "She drinks two cartons of milk every day.", words: ["She", "drinks", "two", "cartons", "of", "milk", "every", "day."],
        correctOrder: ["She", "drinks", "two", "cartons", "of", "milk", "every", "day."], explanation: "'Cartons of milk' = hộp sữa."
      },
      {
        id: "22_4", type: "listening_quiz", title: "Luyện nghe:",
        audioText: "How many bowls of rice do you eat for lunch? I eat two bowls.",
        questionText: "He eats ______ bowls of rice for lunch.", options: ["two", "three", "four", "one"],
        correctIndex: 0, explanation: "'Two bowls of rice' = 2 bát cơm."
      }
    ]
  },
  {
    id: 23,
    chapter: 5,
    chapterName: "Chương V: Ẩm Thực & Nghề Nghiệp",
    name: "Ải 23: Nghề Nghiệp Mơ Ước",
    description: "Nghề phi hành gia, phi công, kiến trúc sư (Unit 14)",
    themeColor: "#0284C7",
    monster: { name: "Robot Thao Túng", icon: SVGIcons.robot, maxHp: 195, attackPower: 18 },
    questions: [
      {
        id: "23_1", type: "picture_choice", title: "Phi hành gia vũ trụ:", icon: SVGIcons.astronaut,
        questionText: "I'd like to explore outer space. I want to be an ______.",
        audioText: "I want to be an astronaut.", options: ["astronaut", "architect", "artist", "actor"],
        correctIndex: 0, explanation: "'Astronaut' = phi hành gia."
      },
      {
        id: "23_2", type: "picture_choice", title: "Phi công lái máy bay:", icon: SVGIcons.pilot,
        questionText: "Why would you like to be a pilot? - Because I'd like to ______.",
        audioText: "Because I want to fly planes.", options: ["fly planes", "look after patients", "grow trees", "write stories"],
        correctIndex: 0, explanation: "'Fly planes' = lái máy bay."
      },
      {
        id: "23_3", type: "sentence_scramble", title: "Sắp xếp câu:",
        questionText: "Ghép câu: Bạn muốn làm nghề gì trong tương lai?",
        audioText: "What would you like to be in the future?", words: ["What", "would", "you", "like", "to", "be", "in", "the", "future?"],
        correctOrder: ["What", "would", "you", "like", "to", "be", "in", "the", "future?"], explanation: "Cấu trúc: What would you like to be in the future?"
      },
      {
        id: "23_4", type: "listening_quiz", title: "Luyện nghe:",
        audioText: "Why does Mai want to be a teacher? Because she wants to teach young children.",
        questionText: "Mai wants to be a teacher to teach ______.", options: ["young children", "robots", "animals", "doctors"],
        correctIndex: 0, explanation: "'Teach young children' = dạy trẻ nhỏ."
      }
    ]
  },
  {
    id: 24,
    chapter: 5,
    chapterName: "Chương V: Ẩm Thực & Nghề Nghiệp",
    name: "Ải 24: Thiết Kế & Chữa Bệnh",
    description: "Kiến trúc sư, bác sĩ, y tá, nhà văn (Unit 15)",
    themeColor: "#0369A1",
    monster: { name: "Chiến Binh Máy Cyber", icon: SVGIcons.robot, maxHp: 205, attackPower: 19 },
    questions: [
      {
        id: "24_1", type: "picture_choice", title: "Kiến trúc sư xây nhà:", icon: SVGIcons.addressHouse,
        questionText: "He wants to design modern buildings. He'd like to be an ______.",
        audioText: "He wants to be an architect.", options: ["architect", "engineer", "astronaut", "actor"],
        correctIndex: 0, explanation: "'Architect' = kiến trúc sư."
      },
      {
        id: "24_2", type: "picture_choice", title: "Chăm sóc bệnh nhân:", icon: SVGIcons.toothache,
        questionText: "She'd like to be a nurse because she wants to look after ______.",
        audioText: "She wants to look after patients.", options: ["patients", "planes", "buildings", "books"],
        correctIndex: 0, explanation: "'Patients' = bệnh nhân."
      },
      {
        id: "24_3", type: "sentence_scramble", title: "Sắp xếp câu:",
        questionText: "Ghép câu: Anh ấy muốn trở thành nhà văn viết truyện cho thiếu nhi.",
        audioText: "He wants to be a writer to write stories for children.", words: ["He", "wants", "to", "be", "a", "writer", "to", "write", "stories", "for", "children."],
        correctOrder: ["He", "wants", "to", "be", "a", "writer", "to", "write", "stories", "for", "children."], explanation: "'Writer' = nhà văn."
      },
      {
        id: "24_4", type: "listening_quiz", title: "Luyện nghe:",
        audioText: "What would Linda like to be? She would like to be a famous singer.",
        questionText: "Linda wants to be a famous ______.", options: ["singer", "dancer", "doctor", "pilot"],
        correctIndex: 0, explanation: "'Singer' = ca sĩ."
      }
    ]
  },
  {
    id: 25,
    chapter: 5,
    chapterName: "Chương V: Ẩm Thực & Nghề Nghiệp",
    name: "Ải 25: [TRÙM V] Siêu Robot Trí Tuệ Nhân Tạo",
    description: "Đại Chiến Boss Tổng kết Ẩm Thực, Định Lượng & Nghề Nghiệp!",
    themeColor: "#0F172A",
    monster: { name: "Siêu Robot Hắc Ám Cyber Alpha", icon: SVGIcons.robotBoss, maxHp: 250, attackPower: 22 },
    questions: [
      {
        id: "25_1", type: "picture_choice", title: "Đòn Pháo Năng Lượng:", icon: SVGIcons.noodles,
        questionText: "How ______ sausages did you eat this morning? - Three sausages.",
        audioText: "How many sausages?", options: ["many", "much", "long", "often"],
        correctIndex: 0, explanation: "Xúc xích đếm được dùng 'How many'."
      },
      {
        id: "25_2", type: "sentence_scramble", title: "Đòn Bão Điện:",
        questionText: "Ghép câu: Tôi muốn trở thành kỹ sư để chế tạo máy móc.",
        audioText: "I want to be an engineer to make machines.", words: ["I", "want", "to", "be", "an", "engineer", "to", "make", "machines."],
        correctOrder: ["I", "want", "to", "be", "an", "engineer", "to", "make", "machines."], explanation: "'Engineer' = kỹ sư."
      },
      {
        id: "25_3", type: "listening_quiz", title: "Đòn Sấm Sét:",
        audioText: "What would you like to drink? I would like a glass of lemonade, please.",
        questionText: "What does he order? - A glass of ______.", options: ["lemonade", "orange juice", "mineral water", "tea"],
        correctIndex: 0, explanation: "'Lemonade' = nước chanh."
      },
      {
        id: "25_4", type: "picture_choice", title: "Đòn Hủy Diệt:", icon: SVGIcons.astronaut,
        questionText: "Why does Tom want to be an astronaut? - ______ he wants to visit Mars.",
        audioText: "Because he wants to visit Mars.", options: ["Because", "So", "And", "If"],
        correctIndex: 0, explanation: "Hỏi 'Why' trả lời bằng 'Because'."
      }
    ]
  },

  // CHAPTER 6: CITY, WEATHER, COMPARISONS & FINAL DRAGON CITADEL (Ải 26 -> 30)
  {
    id: 26,
    chapter: 6,
    chapterName: "Chương VI: Thành Phố & Ma Vương Rồng",
    name: "Ải 26: Chỉ Đường & Nơi Chốn",
    description: "Vị trí bưu điện, bảo tàng, hiệu thuốc (Unit 16)",
    themeColor: "#0284C7",
    monster: { name: "Người Đá Bắc Cực", icon: SVGIcons.frostGiant, maxHp: 200, attackPower: 18 },
    questions: [
      {
        id: "26_1", type: "picture_choice", title: "Đối diện bưu điện:", icon: SVGIcons.mapLocation,
        questionText: "Where's the post office? - It's ______ the cinema.",
        audioText: "It is opposite the cinema.", options: ["opposite", "under", "between", "inside"],
        correctIndex: 0, explanation: "'Opposite' = đối diện."
      },
      {
        id: "26_2", type: "picture_choice", title: "Chỉ đường rẽ phải:", icon: SVGIcons.mapLocation,
        questionText: "Turn ______ and then go straight ahead.",
        audioText: "Turn right and go straight ahead.", options: ["right", "on", "up", "down"],
        correctIndex: 0, explanation: "'Turn right' = rẽ phải."
      },
      {
        id: "26_3", type: "sentence_scramble", title: "Sắp xếp câu:",
        questionText: "Ghép câu: Hiệu thuốc nằm ở giữa siêu thị và rạp chiếu phim.",
        audioText: "The pharmacy is between the supermarket and the cinema.", words: ["The", "pharmacy", "is", "between", "the", "supermarket", "and", "the", "cinema."],
        correctOrder: ["The", "pharmacy", "is", "between", "the", "supermarket", "and", "the", "cinema."], explanation: "'Between A and B' = ở giữa A và B."
      },
      {
        id: "26_4", type: "listening_quiz", title: "Luyện nghe:",
        audioText: "How can I get to the museum? You can take bus number 12.",
        questionText: "You can take bus number ______ to the museum.", options: ["12", "20", "22", "10"],
        correctIndex: 0, explanation: "Đáp án nghe được là bus số 12."
      }
    ]
  },
  {
    id: 27,
    chapter: 6,
    chapterName: "Chương VI: Thành Phố & Ma Vương Rồng",
    name: "Ải 27: Dự Báo Thời Tiết & Các Mùa",
    description: "Thời tiết các vùng miền & 4 mùa trong năm (Unit 17)",
    themeColor: "#0369A1",
    monster: { name: "Bão Tuyết Cổ Đại", icon: SVGIcons.frostGiant, maxHp: 215, attackPower: 19 },
    questions: [
      {
        id: "27_1", type: "picture_choice", title: "Trời nắng nóng:", icon: SVGIcons.weatherSunny,
        questionText: "What will the weather be like tomorrow? - It will be hot and ______.",
        audioText: "It will be hot and sunny tomorrow.", options: ["sunny", "snowy", "rainy", "stormy"],
        correctIndex: 0, explanation: "'Hot and sunny' = nóng và có nắng."
      },
      {
        id: "27_2", type: "picture_choice", title: "Mùa đông lạnh giá:", icon: SVGIcons.weatherSunny,
        questionText: "In winter, it is usually very cold and ______.",
        audioText: "It is very cold and windy.", options: ["windy", "warm", "hot", "sunny"],
        correctIndex: 0, explanation: "'Windy' = nhiều gió."
      },
      {
        id: "27_3", type: "sentence_scramble", title: "Sắp xếp câu:",
        questionText: "Ghép câu: Ở Việt Nam có bốn mùa.",
        audioText: "There are four seasons in northern Viet Nam.", words: ["There", "are", "four", "seasons", "in", "northern", "Viet", "Nam."],
        correctOrder: ["There", "are", "four", "seasons", "in", "northern", "Viet", "Nam."], explanation: "'Four seasons' = 4 mùa (Xuân, Hạ, Thu, Đông)."
      },
      {
        id: "27_4", type: "listening_quiz", title: "Luyện nghe:",
        audioText: "What is your favorite season? I like autumn because the weather is cool and pleasant.",
        questionText: "She likes autumn because it is ______.", options: ["cool and pleasant", "very hot", "snowy", "stormy"],
        correctIndex: 0, explanation: "'Cool and pleasant' = mát mẻ và dễ chịu."
      }
    ]
  },
  {
    id: 28,
    chapter: 6,
    chapterName: "Chương VI: Thành Phố & Ma Vương Rồng",
    name: "Ải 28: Danh Lam Thắng Cảnh Việt Nam",
    description: "Chùa Thiên Mụ, Hồ Hoàn Kiếm, Cầu Tràng Tiền (Unit 18)",
    themeColor: "#0D9488",
    monster: { name: "Rồng Nước Cổ Đại", icon: SVGIcons.dragon, maxHp: 230, attackPower: 20 },
    questions: [
      {
        id: "28_1", type: "picture_choice", title: "Chùa Thiên Mụ Huế:", icon: SVGIcons.pagoda,
        questionText: "Which place would you like to visit: Thien Mu ______ or Trang Tien Bridge?",
        audioText: "Thien Mu Pagoda.", options: ["Pagoda", "Lake", "Sea", "Cinema"],
        correctIndex: 0, explanation: "'Thien Mu Pagoda' = Chùa Thiên Mụ."
      },
      {
        id: "28_2", type: "sentence_scramble", title: "Sắp xếp câu:",
        questionText: "Ghép câu: Chùa Trấn Quốc nằm trên một hòn đảo ở Hồ Tây.",
        audioText: "Tran Quoc Pagoda is on an island in West Lake.", words: ["Tran", "Quoc", "Pagoda", "is", "on", "an", "island", "in", "West", "Lake."],
        correctOrder: ["Tran", "Quoc", "Pagoda", "is", "on", "an", "island", "in", "West", "Lake."], explanation: "'West Lake' = Hồ Tây (Hà Nội)."
      },
      {
        id: "28_3", type: "listening_quiz", title: "Luyện nghe:",
        audioText: "What do you think of Dam Sen Park? It is more attractive than I expected.",
        questionText: "Dam Sen Park is more ______ than expected.", options: ["attractive", "boring", "small", "quiet"],
        correctIndex: 0, explanation: "'More attractive' = hấp dẫn, thu hút hơn."
      },
      {
        id: "28_4", type: "picture_choice", title: "Cầu Tràng Tiền:", icon: SVGIcons.pagoda,
        questionText: "Trang Tien Bridge crosses the famous Perfume ______ in Hue.",
        audioText: "The Perfume River in Hue.", options: ["River", "Lake", "Ocean", "Mountain"],
        correctIndex: 0, explanation: "'Perfume River' = Sông Hương (Huế)."
      }
    ]
  },
  {
    id: 29,
    chapter: 6,
    chapterName: "Chương VI: Thành Phố & Ma Vương Rồng",
    name: "Ải 29: So Sánh Địa Điểm & Kế Hoạch",
    description: "So sánh hơn tính từ dài & thì Tương lai gần (Units 19-20)",
    themeColor: "#DC2626",
    monster: { name: "Hộ Vệ Rồng Lửa Hắc Ám", icon: SVGIcons.dragon, maxHp: 260, attackPower: 22 },
    questions: [
      {
        id: "29_1", type: "picture_choice", title: "So sánh hơn:", icon: SVGIcons.pagoda,
        questionText: "Which one is ______: Life in the city or life in the countryside?",
        audioText: "Which one is more exciting?", options: ["more exciting", "excitinger", "most exciting", "exciting"],
        correctIndex: 0, explanation: "Tính từ dài dùng 'more exciting'."
      },
      {
        id: "29_2", type: "sentence_scramble", title: "Sắp xếp câu:",
        questionText: "Ghép câu: Bạn dự định làm gì vào cuối tuần này?",
        audioText: "What are you going to do this weekend?", words: ["What", "are", "you", "going", "to", "do", "this", "weekend?"],
        correctOrder: ["What", "are", "you", "going", "to", "do", "this", "weekend?"], explanation: "Cấu trúc tương lai gần: be going to."
      },
      {
        id: "29_3", type: "listening_quiz", title: "Luyện nghe:",
        audioText: "I am going to explore the caves and build sandcastles on the beach.",
        questionText: "He is going to explore the ______.", options: ["caves", "houses", "roads", "schools"],
        correctIndex: 0, explanation: "'Explore the caves' = khám phá các hang động."
      },
      {
        id: "29_4", type: "picture_choice", title: "So sánh tính từ ngắn:", icon: SVGIcons.pagoda,
        questionText: "Ha Noi is ______ than Hue.",
        audioText: "Ha Noi is bigger than Hue.", options: ["bigger", "more big", "biggest", "big"],
        correctIndex: 0, explanation: "Tính từ ngắn gấp đôi phụ âm: 'bigger than'."
      }
    ]
  },
  {
    id: 30,
    chapter: 6,
    chapterName: "Chương VI: Thành Phố & Ma Vương Rồng",
    name: "Ải 30: [ĐẠI CHIẾN CUỐI CÙNG] Ma Vương Rồng Tối Thượng",
    description: "Trận Đại Chiến Trùm Cuối Tối Thượng - Chinh Phục Vương Quốc Anh Ngữ!",
    themeColor: "#7F1D1D",
    monster: { name: "Ma Vương Rồng Lửa Bất Tử (Chúa Tễ Bóng Đêm)", icon: SVGIcons.ultimateDragon, maxHp: 380, attackPower: 26 },
    questions: [
      {
        id: "30_1", type: "picture_choice", title: "Đòn Tuyệt Kỹ 1: Câu điều kiện", icon: SVGIcons.science,
        questionText: "If the weather is fine tomorrow, we ______ go on a picnic.",
        audioText: "We will go on a picnic.", options: ["will", "did", "have", "are"],
        correctIndex: 0, explanation: "Câu điều kiện loại 1: If + HTĐ, S + will + V."
      },
      {
        id: "30_2", type: "sentence_scramble", title: "Đòn Băng Phong 2: Ngữ pháp tổng hợp",
        questionText: "Ghép câu: Bạn nên đội mũ bảo hiểm khi đi xe máy.",
        audioText: "You should wear a helmet when riding a motorbike.", words: ["You", "should", "wear", "a", "helmet", "when", "riding", "a", "motorbike."],
        correctOrder: ["You", "should", "wear", "a", "helmet", "when", "riding", "a", "motorbike."], explanation: "'Wear a helmet' = đội mũ bảo hiểm."
      },
      {
        id: "30_3", type: "listening_quiz", title: "Đòn Sấm Sét 3: Luyện nghe bậc thầy",
        audioText: "We are proud of being smart, brave, and excellent English knights.",
        questionText: "We are proud of being ______ English knights.", options: ["smart and brave", "lazy", "slow", "quiet"],
        correctIndex: 0, explanation: "'Smart and brave' = thông minh và dũng cảm."
      },
      {
        id: "30_4", type: "picture_choice", title: "Đòn Ánh Sáng 4: Thì Hiện tại tiếp diễn", icon: SVGIcons.readingStory,
        questionText: "Look! The children ______ happily in the playground.",
        audioText: "The children are playing happily.", options: ["are playing", "played", "plays", "is play"],
        correctIndex: 0, explanation: "Có dấu hiệu 'Look!' dùng HTTD: 'are playing'."
      },
      {
        id: "30_5", type: "sentence_scramble", title: "Chiêu Thức Tối Thượng 5: PHÁ ĐẢO VƯƠNG QUỐC ANH NGỮ!",
        questionText: "Ghép câu khẩu hiệu chiến thắng vĩ đại của Hiệp Sĩ Tiếng Anh!",
        audioText: "We have conquered all thirty stages and saved the English Kingdom!",
        words: ["We", "have", "conquered", "all", "thirty", "stages", "and", "saved", "the", "English", "Kingdom!"],
        correctOrder: ["We", "have", "conquered", "all", "thirty", "stages", "and", "saved", "the", "English", "Kingdom!"],
        explanation: "CHÚC MỪNG BẠN ĐÃ XUẤT SẮC CHINH PHỤC CẢ 30 ẢI VÀ TRỞ THÀNH ĐẠI HIỆP SĨ HUYỀN THOẠI CỦA VƯƠNG QUỐC ANH NGỮ!"
      }
    ]
  }
];

// Flashcards
const FLASHCARD_DECKS = [
  {
    category: "🦁 Động Vật & Hoạt Động (Animals)",
    cards: [
      { word: "Peacock", ipa: "/ˈpiːkɒk/", vi: "Con công (múa đẹp)", icon: SVGIcons.peacock, ex: "The peacocks danced beautifully." },
      { word: "Elephant", ipa: "/ˈelɪfənt/", vi: "Con voi (to lớn, vòi dài)", icon: SVGIcons.tiger, ex: "The elephant moved slowly." },
      { word: "Tiger", ipa: "/ˈtaɪɡər/", vi: "Con hổ (gầm to vang dội)", icon: SVGIcons.tiger, ex: "The tigers roared loudly." },
      { word: "Gorilla", ipa: "/ɡəˈrɪlə/", vi: "Con khỉ đột (thông minh)", icon: SVGIcons.peacock, ex: "The gorillas were very smart." }
    ]
  },
  {
    category: "🚀 Nghề Nghiệp Mơ Ước (Jobs)",
    cards: [
      { word: "Astronaut", ipa: "/ˈæstrənɔːt/", vi: "Phi hành gia vũ trụ", icon: SVGIcons.astronaut, ex: "I'd like to explore space." },
      { word: "Pilot", ipa: "/ˈpaɪlət/", vi: "Phi công lái máy bay", icon: SVGIcons.pilot, ex: "I'd like to fly planes." },
      { word: "Architect", ipa: "/ˈɑːkɪtekt/", vi: "Kiến trúc sư thiết kế nhà", icon: SVGIcons.addressHouse, ex: "He wants to design buildings." },
      { word: "Dentist", ipa: "/ˈdentɪst/", vi: "Bác sĩ nha khoa (răng)", icon: SVGIcons.toothache, ex: "You should see a dentist." }
    ]
  },
  {
    category: "🍜 Ẩm Thực & Đồ Uống (Food & Drinks)",
    cards: [
      { word: "Noodles", ipa: "/ˈnuːdlz/", vi: "Mì, bún, phở", icon: SVGIcons.noodles, ex: "A bowl of noodles." },
      { word: "Orange Juice", ipa: "/ˈɒrɪndʒ dʒuːs/", vi: "Nước cam ép", icon: SVGIcons.noodles, ex: "A glass of orange juice." },
      { word: "Sausages", ipa: "/ˈsɒsɪdʒɪz/", vi: "Xúc xích", icon: SVGIcons.noodles, ex: "Two sausages every day." },
      { word: "Water", ipa: "/ˈwɔːtər/", vi: "Nước khoáng", icon: SVGIcons.noodles, ex: "Three bottles of water." }
    ]
  },
  {
    category: "🏥 Sức Khỏe & An Toàn (Health & Safety)",
    cards: [
      { word: "Toothache", ipa: "/ˈtuːθeɪk/", vi: "Đau răng", icon: SVGIcons.toothache, ex: "I have a terrible toothache." },
      { word: "Fever", ipa: "/ˈfiːvər/", vi: "Cơn sốt cao", icon: SVGIcons.toothache, ex: "Tony has a high fever." },
      { word: "Sore Throat", ipa: "/ˌsɔː ˈθrəʊt/", vi: "Đau rát họng", icon: SVGIcons.toothache, ex: "She has a sore throat." },
      { word: "Get a Burn", ipa: "/ɡet ə bɜːn/", vi: "Bị bỏng lửa", icon: SVGIcons.toothache, ex: "Don't play with matches!" }
    ]
  },
  {
    category: "🗺️ Địa Điểm & Chỉ Đường (Directions)",
    cards: [
      { word: "Opposite", ipa: "/ˈɒpəzɪt/", vi: "Đối diện", icon: SVGIcons.mapLocation, ex: "Opposite the cinema." },
      { word: "Turn Right", ipa: "/tɜːn raɪt/", vi: "Rẽ sang phải", icon: SVGIcons.mapLocation, ex: "Turn right and go straight." },
      { word: "Pharmacy", ipa: "/ˈfɑːməsi/", vi: "Hiệu thuốc tây", icon: SVGIcons.mapLocation, ex: "Buy medicine at the pharmacy." },
      { word: "Pagoda", ipa: "/pəˈɡəʊdə/", vi: "Ngôi chùa cổ kính", icon: SVGIcons.pagoda, ex: "Visit Thien Mu Pagoda." }
    ]
  }
];

// Handbook Grammar Data
const HANDBOOK_DATA = [
  {
    category: "Ngữ Pháp Trọng Tâm Lớp 5 & Nâng Cao (Units 1 - 20)",
    items: [
      {
        title: "1. Hỏi & Trả lời Địa chỉ (Unit 1)",
        formula: "What's your address? ➔ It's + [Số nhà + Tên đường / Ngõ...]",
        example: "What's your address? - It's 105 Hoa Binh Lane.",
        note: "Lane (ngõ), Street (đường), Flat (căn hộ), Tower (tòa tháp)."
      },
      {
        title: "2. Hỏi Tần Suất Hoạt Động (Unit 2)",
        formula: "How often do you + V? ➔ I + V + [once / twice / three times a week].",
        example: "How often do you have English? - Four times a week.",
        note: "Once (1 lần), Twice (2 lần), Three times (3 lần), Every day (mỗi ngày)."
      },
      {
        title: "3. Kể Chuyến Đi Quá Khứ (Units 3 - 5)",
        formula: "Where did you go? ➔ I went to + [Địa điểm].\nHow did you get there? ➔ I went by + [Phương tiện].",
        example: "Where did you go? - I went to Ha Long Bay by train.",
        note: "Go ➔ Went, Eat ➔ Ate, See ➔ Saw, Sing ➔ Sang, Play ➔ Played."
      },
      {
        title: "4. Lời Khuyên Sức Khỏe & An Toàn (Units 11 - 12)",
        formula: "You should + V(nguyên thể) / Don't + V... You may + [Hậu quả]",
        example: "You should go to the doctor.\nDon't ride your bike too fast! You may fall.",
        note: "Toothache (đau răng), Fever (sốt), Headache (đau đầu), Sore throat (đau họng)."
      },
      {
        title: "5. Hỏi & Nói Về Nghề Nghiệp Tương Lai (Unit 14)",
        formula: "What would you like to be in the future? ➔ I'd like to be a/an + [Nghề].\nWhy? ➔ Because I'd like to + [Lý do].",
        example: "I'd like to be an astronaut because I want to explore space.",
        note: "Pilot (phi công), Astronaut (phi hành gia), Architect (kiến trúc sư)."
      },
      {
        title: "6. So Sánh Hơn Của Tính Từ Dài & Ngắn (Units 18 - 19)",
        formula: "Short Adj: S1 + is + Adj-er + than + S2 (bigger than)\nLong Adj: S1 + is + more Adj + than + S2 (more exciting than)",
        example: "Life in the city is more exciting than life in the countryside.",
        note: "More beautiful, more peaceful, bigger, hotter, colder."
      },
      {
        title: "7. Câu Điều Kiện Loại 1 (Nâng Cao Chuyển Cấp Lớp 6)",
        formula: "If + S + V(hiện tại đơn), S + will + V(nguyên mẫu)",
        example: "If it rains tomorrow, we will stay at home.",
        note: "Dùng để diễn tả điều kiện có thể xảy ra ở hiện tại hoặc tương lai."
      }
    ]
  }
];

// Shop Items
const SHOP_ITEMS = [
  {
    id: "potion_hp",
    name: "Bình Máu Thần Kỳ (HP Potion)",
    description: "Hồi phục 40 HP ngay lập tức khi đang vượt ải.",
    price: 30,
    icon: "🧪",
    effect: { type: "heal", value: 40 }
  },
  {
    id: "shield_protect",
    name: "Khiên Hộ Thể (Magic Shield)",
    description: "Miễn nhiễm sát thương khi trả lời sai 1 lần trong ải.",
    price: 50,
    icon: "🛡️",
    effect: { type: "shield", count: 1 }
  },
  {
    id: "hint_scroll",
    name: "Cuộn Giấy Gợi Ý (Hint Scroll)",
    description: "Loại bỏ bớt 1 phương án sai trong câu hỏi trắc nghiệm.",
    price: 40,
    icon: "📜",
    effect: { type: "hint", count: 1 }
  },
  {
    id: "skin_wizard",
    name: "Trang Phục Pháp Sư Tối Thượng",
    description: "Thay đổi hình ảnh đại diện thành Pháp Sư Thông Thái.",
    price: 100,
    icon: "🧙‍♂️",
    effect: { type: "avatar", skin: "wizard" }
  },
  {
    id: "skin_archer",
    name: "Trang Phục Xạ Thủ Rừng Xanh",
    description: "Thay đổi hình ảnh đại diện thành Xạ Thủ Nhanh Nhẹn.",
    price: 100,
    icon: "🏹",
    effect: { type: "avatar", skin: "archer" }
  }
];
