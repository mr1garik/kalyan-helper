// Офлайн-база: вкусы, бренды украинского рынка и классические миксы.
// Миксы описаны через вкусы, а не бренды, поэтому подходят к любому табаку с полки.

// Порядок важен: распознанный кусок текста вырезается, чтобы «кавун» не стал «кавой»,
// «шоколад» — «колой», а «watermelon» — дыней.
window.FLAVORS = [
  ["watermelon", "Арбуз", /арбуз|кавун|watermelon/],
  ["grapefruit", "Грейпфрут", /грейпфрут|grapefruit|помело|pomelo/],
  ["anise", "Двойное яблоко / анис", /дв[оі]йн\S* яблу?о?к|double apple|ані[сc]|анис|anise|лакриц|licorice/],
  ["melon", "Дыня", /дын|дин[яію]|melon/],
  ["mint", "Мята", /мят|м['’ʼ]ят|mint|перечн/],
  ["ice", "Холодок", /ментол|menthol|\bice\b|лед(?![а-яіїєґё])|льод|лёд|лід|холод|colder|arctic|арктич|frost|freez|\bcool/],
  ["lemonade", "Лимонад / содовая", /лимонад|lemonade|содов|soda|тархун|tarkhun/],
  ["lemon", "Лимон", /лимон|lemon|\blemo\b/],
  ["lime", "Лайм", /лайм|lime/],
  ["orange", "Апельсин / мандарин", /апельсин|orange|мандарин|tangerine|mandarin/],
  ["pineapple", "Ананас", /ананас|pineapple/],
  ["mango", "Манго", /манго|mango|man\.?goo/],
  ["passion", "Маракуйя", /маракуй|passion/],
  ["peach", "Персик / абрикос", /персик|peach|абрикос|apricot/],
  ["banana", "Банан", /банан|banana/],
  ["coconut", "Кокос", /кокос|coconut/],
  ["kiwi", "Киви", /киви|ківі|kiwi/],
  ["lychee", "Личи", /личи|лічі|lychee|litchi/],
  ["guava", "Гуава", /гуав|guava/],
  ["strawberry", "Клубника", /клубни|полуниц|земляни|strawberr/],
  ["raspberry", "Малина", /малин|raspberr/],
  ["blueberry", "Черника", /черник|чорниц|blueberr|голубик|лохин/],
  ["blackcurrant", "Смородина", /смородин|currant/],
  ["cherry", "Вишня", /вишн|черешн|cherry/],
  ["pomegranate", "Гранат", /гранат|granate|pomegranate/],
  ["barberry", "Барбарис", /барбарис|барві|barberr/],
  ["berries", "Ягодный микс", /ягід|ягод|berry|berries|ожин|ежевик|асаї|асаи|acai|брусни|журавлин|клюкв/],
  ["grape", "Виноград", /виноград|grape/],
  ["apple", "Яблоко", /яблук|яблок|apple/],
  ["pear", "Груша", /груш|\bpear/],
  ["plum", "Слива", /слив[аиу]|\bplum/],
  ["cactus", "Зелёное: кактус / огурец / алоэ", /кактус|cactus|алое|алоэ|aloe|огур|огір|cucumber|фейхоа/],
  ["chocolate", "Шоколад", /шоколад|chocolate|choco|брауні|брауни|brownie|какао|cocoa/],
  ["cola", "Кола", /кол[аиу](?![а-яіїєґё])|cola/],
  ["coffee", "Кофе", /кофе|кав[аи](?![а-яіїєґё])|coffee|espresso|латте|капучин/],
  ["tea", "Чай", /чай|чаю|\btea\b|матча|бергамот/],
  ["caramel", "Карамель", /карамел|caramel|toffee|ирис/],
  ["vanilla", "Ваниль", /ванил|ваніл|vanill?a/],
  ["cream", "Сливки / десерт", /крем|cream|молок|milk|чиз?кейк|чізкейк|cheesecake|йогурт|yogh?urt|пломбир|морозив|мороженое|шейк|shake/],
  ["pastry", "Выпечка", /пирог|пиріг|\bpie\b|печив|печень|cookie|тарт(?![а-яіїєґё])|\btart|вафл|круас|пончик|donut|flakes|пластівц|хлопья|овсян|вівсян/],
  ["nuts", "Орехи", /горіх|горiх|орех|\bnut|фундук|мигдал|миндал|фисташ|фісташ|hazelnut|almond|pistach|арахис|арахіс/],
  ["gum", "Жвачка / конфеты", /жвачк|жуйк|\bgum|bubble|конфет|цукерк|льодяник|леденц|candy|мармелад|желе|jelly|shot\b/],
  ["rose", "Цветы", /(?<![а-яіїєґё])роз[аыи](?![а-яіїєґё])|троянд|\brose\b|лаванд|lavender|жасмин|jasmin|лотос|лотус|lotus|бузин|elderflower/],
  ["cinnamon", "Пряности", /кориц|cinnamon|прянощ|пряност|спец[іи]|spice|кардамон|имбир|імбир|ginger|гвоздик/],
  ["alcohol", "Коктейль", /(?<![а-яіїєґё])ром(?![а-яіїєґё])|\brum\b|мохито|mojito|маргарит|margarit|апероль|aperol|апер[оа]|текіл|текил|tequila|шампан|просекко|prosecco|спр[іи]тц|spritz|пунш|punch|кюрасао|curacao|(?<![а-яіїєґё])джин(?![а-яіїєґё])/],
];

window.FLAVOR_NAME = Object.fromEntries(FLAVORS.map(([id, name]) => [id, name]));

// Возвращает id вкусов, найденных в названии табака
window.detectFlavors = function (text) {
  let t = " " + String(text || "").toLowerCase().replace(/ё/g, "е") + " ";
  const found = [];
  for (const [id, , re] of FLAVORS) {
    const g = new RegExp(re.source, "g");
    if (g.test(t)) { found.push(id); t = t.replace(new RegExp(re.source, "g"), " · "); }
  }
  return found;
};

// Бренды, которые на октябрь 2026 продаются в украинских кальянных магазинах
window.UA_BRANDS = [
  "420", "Absolem", "Adalya", "Al Fakher", "Arawak", "Atom", "Blacksmok", "Buta", "Charisma", "Creepy",
  "CULTt", "Dead Horse", "Flow", "Fumari", "Gedonist", "Glitch", "Heven", "Hookanuti", "Jibiar", "Lagom",
  "Lirra", "Loud", "Molfar", "Monster", "Orwell", "Palladium", "Phantom", "Serbetli", "Spam", "Spirit",
  "Starway", "Tangiers", "True Passion", "Turbo", "Unicorn", "Unity", "Whitesmok", "Yolo", "Yummy", "Zodiac",
  "Самсварил", "Swipe (без никотина)", "IndiGo (без никотина)", "Pixtea (без никотина)", "Space Tea (чайная смесь)",
];

// Российские бренды: официально в Украину не ввозятся, приложение предупредит
window.RU_BRANDS = /dark\s?side|дарксайд|must\s?have|мастхэв|black\s?burn|блэк ?берн|chabacco|duft|sebero|satyr|северн|північн|element|элемент|spectrum|honey badger|smoke angels|сарма|sarma|chaba\b|jent|nash|(?<![а-яіїєґё])наш(?![а-яіїєґё])/i;

// Примеры: такие позиции видели в украинских магазинах (наличие меняется)
window.UA_EXAMPLES = {
  watermelon: ["Whitesmok Watermelon Ice", "Monster Redpool"],
  melon: ["Monster Melonholy"],
  mint: ["Monster Fresh Blust"],
  ice: ["Molfar Арктичний Подих", "Heven Colder"],
  lemon: ["Unity Acid Lemon"],
  lime: ["Monster Laguna (с клубникой и киви)"],
  grapefruit: ["Molfar The One"],
  mango: ["Monster Man.Goo.Boy"],
  banana: ["Adalya Banana", "Monster BananaKong"],
  peach: ["Adalya Apricot", "Adalya Berlin Nights"],
  strawberry: ["Monster Laguna"],
  kiwi: ["Monster Laguna"],
  blackcurrant: ["Heven Black Currant", "Unity Blackcurrant"],
  cherry: ["Heven Dark Cherry", "Unity Cherry Shot"],
  pomegranate: ["Heven Granate"],
  berries: ["Heven Blend Berry", "Unity Acid Berry", "Adalya Berry Mix"],
  barberry: ["Molfar Барві"],
  grape: ["Monster DrthgrApe (с мятой)"],
  apple: ["Adalya Bahrain Apple"],
  pineapple: ["Unity Pineapple Candy"],
  coconut: ["Unity Coconut Shake"],
  chocolate: ["Unity Brownie"],
  tea: ["Unity Brazilian Tea"],
  cactus: ["Monster Icecactus"],
  lemonade: ["True Passion California Lemo"],
  anise: ["True Passion Tofahten"],
  alcohol: ["Molfar Margarita", "Unity Caribbean Rum"],
  cinnamon: ["Adalya Apple Cinnamon"],
  cola: ["Adalya Black Cherry (вишня с колой)"],
  rose: ["Unity Berry Lavender"],
  lychee: ["Molfar For Her"],
};

// Классические сочетания. o: true — необязательный компонент, без него микс тоже работает
window.MIXES = [
  { n: "Арбузный бриз", p: [["watermelon", 60], ["mint", 25], ["lime", 15, 1]], d: "Сочный арбуз, мятная свежесть и лёгкая кислинка." },
  { n: "Дыня-манго со льдом", p: [["melon", 50], ["mango", 30], ["ice", 20, 1]], d: "Медовая дыня и спелое манго, холодок по желанию." },
  { n: "Грейпфрут-мята", p: [["grapefruit", 70], ["mint", 30]], d: "Горьковато-кислый цитрус и мята. Классика, которая не надоедает." },
  { n: "Мохито", p: [["lime", 50], ["mint", 35], ["lemon", 15, 1]], d: "Лайм и мята, как в коктейле." },
  { n: "Черника-лимон", p: [["blueberry", 60], ["lemon", 40]], d: "Сладкая черника с ярким лимоном." },
  { n: "Малина-лайм", p: [["raspberry", 60], ["lime", 40]], d: "Ягодная сладость и кислый лайм, очень освежает." },
  { n: "Клубника-киви", p: [["strawberry", 55], ["kiwi", 45]], d: "Сладко-кислая фруктовая пара." },
  { n: "Клубнично-банановый смузи", p: [["strawberry", 50], ["banana", 35], ["cream", 15, 1]], d: "Мягкий десертный смузи." },
  { n: "Пина колада", p: [["pineapple", 50], ["coconut", 40], ["cream", 10, 1]], d: "Ананас и кокос, пляжный вайб." },
  { n: "Тропики", p: [["mango", 40], ["passion", 35], ["pineapple", 25]], d: "Насыщенный тропический коктейль." },
  { n: "Персик-маракуйя", p: [["peach", 55], ["passion", 45]], d: "Сладкий персик с кислинкой маракуйи." },
  { n: "Вишнёвая кола", p: [["cola", 60], ["cherry", 40]], d: "Газировка с вишней. Беспроигрышный вариант." },
  { n: "Кола-лайм", p: [["cola", 70], ["lime", 30]], d: "Кола с долькой лайма." },
  { n: "Яблочный штрудель", p: [["apple", 60], ["cinnamon", 20], ["pastry", 20, 1]], d: "Печёное яблоко с корицей." },
  { n: "Двойное яблоко с мятой", p: [["anise", 75], ["mint", 25, 1]], d: "Старая школа: анисовое яблоко." },
  { n: "Ягодный лимонад", p: [["berries", 50], ["lemonade", 35], ["ice", 15, 1]], d: "Летний лимонад с ягодами." },
  { n: "Гранат-грейпфрут", p: [["pomegranate", 50], ["grapefruit", 50]], d: "Терпкий и кислый, для любителей не сладкого." },
  { n: "Смородина-мята", p: [["blackcurrant", 70], ["mint", 30]], d: "Насыщенная смородина и холодная мята." },
  { n: "Барбарисовые леденцы", p: [["barberry", 60], ["lemon", 25], ["ice", 15, 1]], d: "Как те самые конфеты из детства." },
  { n: "Чай с лимоном", p: [["tea", 60], ["lemon", 40]], d: "Уютный, не приторный." },
  { n: "Пряный апельсиновый чай", p: [["tea", 50], ["orange", 30], ["cinnamon", 20, 1]], d: "Чай с апельсином и специями, для холодных вечеров." },
  { n: "Личи-роза", p: [["lychee", 60], ["rose", 25], ["raspberry", 15, 1]], d: "Нежный цветочно-фруктовый микс." },
  { n: "Черничный чизкейк", p: [["blueberry", 50], ["cream", 35], ["vanilla", 15, 1]], d: "Десерт с ягодами." },
  { n: "Банан в шоколаде", p: [["banana", 55], ["chocolate", 45]], d: "Плотный сладкий десерт." },
  { n: "Карамельный латте", p: [["coffee", 50], ["caramel", 30], ["cream", 20, 1]], d: "Кофейный десерт." },
  { n: "Апельсин в шоколаде", p: [["orange", 50], ["chocolate", 50]], d: "Как новогодние конфеты." },
  { n: "Пьяная вишня", p: [["cherry", 55], ["chocolate", 45]], d: "Вишня и шоколад." },
  { n: "Манго-лайм", p: [["mango", 65], ["lime", 35]], d: "Сладкое манго, освежённое лаймом." },
  { n: "Дыня-клубника", p: [["melon", 55], ["strawberry", 45]], d: "Сладкий летний микс." },
  { n: "Арбуз-клубника", p: [["watermelon", 55], ["strawberry", 45]], d: "Ягодно-бахчевой, очень сочный." },
  { n: "Арбуз-дыня", p: [["watermelon", 50], ["melon", 50], ["ice", 10, 1]], d: "Бахчевой дуэт." },
  { n: "Виноград-мята", p: [["grape", 70], ["mint", 30]], d: "Классика кальянных." },
  { n: "Виноград-черника", p: [["grape", 50], ["blueberry", 50]], d: "Тёмные ягоды, насыщенно и сладко." },
  { n: "Персиковый чай", p: [["tea", 50], ["peach", 50]], d: "Как холодный чай из бутылки." },
  { n: "Киви-лайм", p: [["kiwi", 60], ["lime", 40]], d: "Зелёный кислый микс." },
  { n: "Ананас-лайм-мята", p: [["pineapple", 50], ["lime", 30], ["mint", 20]], d: "Тропическая свежесть." },
  { n: "Баунти", p: [["coconut", 60], ["chocolate", 40]], d: "Кокос в шоколаде." },
  { n: "Груша-ваниль", p: [["pear", 60], ["vanilla", 40]], d: "Мягкий и нежный." },
  { n: "Ледяные яблоко и груша", p: [["apple", 45], ["pear", 40], ["ice", 15]], d: "Сочный садовый микс с холодком." },
  { n: "Маргарита", p: [["alcohol", 50], ["lime", 40], ["ice", 10, 1]], d: "Коктейльный: лайм с ноткой текилы." },
  { n: "Гуава-клубника", p: [["guava", 55], ["strawberry", 45]], d: "Экзотика с ягодной сладостью." },
  { n: "Цитрусовый взрыв", p: [["orange", 40], ["lemon", 30], ["grapefruit", 30]], d: "Сплошной цитрус, бодрит." },
  { n: "Зелёная свежесть", p: [["cactus", 50], ["lime", 30], ["mint", 20, 1]], d: "Огурец/кактус с лаймом: необычно и очень свежо." },
  { n: "Ягодная жвачка", p: [["gum", 60], ["berries", 40]], d: "Сладкий конфетный микс." },
  { n: "Малина-ваниль", p: [["raspberry", 60], ["vanilla", 40]], d: "Ягодный десерт." },
  { n: "Клубника со сливками", p: [["strawberry", 60], ["cream", 40]], d: "Нежный летний десерт." },
  { n: "Персик-манго", p: [["peach", 50], ["mango", 50]], d: "Спелый, сладкий, фруктовый." },
  { n: "Банан-кокос", p: [["banana", 50], ["coconut", 50]], d: "Сливочная тропика." },
  { n: "Вишня-миндаль", p: [["cherry", 60], ["nuts", 40]], d: "Как вишнёвый ликёр." },
  { n: "Пряная слива", p: [["plum", 60], ["cinnamon", 25], ["orange", 15, 1]], d: "Глинтвейновый вайб." },
  { n: "Лимонный пирог", p: [["lemon", 50], ["pastry", 35], ["vanilla", 15, 1]], d: "Кислый крем на песочном тесте." },
  { n: "Малиновый лимонад", p: [["raspberry", 45], ["lemonade", 40], ["mint", 15, 1]], d: "Летний освежающий." },
  { n: "Ледяная черника", p: [["blueberry", 75], ["ice", 25]], d: "Простая, но мощная пара." },
  { n: "Гранат-малина", p: [["pomegranate", 50], ["raspberry", 50]], d: "Красные ягоды с терпкостью." },
  { n: "Апельсин-маракуйя", p: [["orange", 50], ["passion", 50]], d: "Сочный кисло-сладкий сок." },
  { n: "Кофе с орехом", p: [["coffee", 55], ["nuts", 45]], d: "Плотный, для любителей не фруктового." },
  { n: "Ягоды с лавандой", p: [["berries", 65], ["rose", 35]], d: "Ягоды с цветочной ноткой." },
  { n: "Красный морс", p: [["blackcurrant", 40], ["raspberry", 35], ["lemon", 25]], d: "Кисло-сладкий ягодный морс." },
  { n: "Мятная жвачка", p: [["gum", 50], ["mint", 50]], d: "Бабл-гам с холодной мятой." },
  { n: "Ванильная кола", p: [["cola", 70], ["vanilla", 30]], d: "Кола со сливочной ноткой." },
  { n: "Яблоко-киви", p: [["apple", 50], ["kiwi", 50]], d: "Зелёный и кисленький." },
  { n: "Абрикос-ваниль", p: [["peach", 60], ["vanilla", 40]], d: "Мягкий фруктовый десерт." },
  { n: "Апероль спритц", p: [["alcohol", 50], ["orange", 35], ["grapefruit", 15, 1]], d: "Горьковатый апельсиновый коктейль." },
  { n: "Арбуз-лимонад", p: [["watermelon", 55], ["lemonade", 45]], d: "Арбузная газировка." },
  { n: "Ягоды-мята-лёд", p: [["berries", 60], ["mint", 20], ["ice", 20]], d: "Ягоды и много холода." },
];

// Слова-настроения для поиска: «свежее», «кислое», «десерт» раскрываются в набор вкусов
window.MOODS = [
  [/свеж|fresh|освеж/, ["mint", "ice", "lime", "lemon", "grapefruit", "cactus", "kiwi", "watermelon"]],
  [/кисл|sour/, ["lemon", "lime", "grapefruit", "pomegranate", "barberry", "blackcurrant", "kiwi", "passion"]],
  [/сладк|солодк|sweet/, ["cream", "vanilla", "caramel", "chocolate", "gum", "banana", "mango", "melon", "strawberry"]],
  [/десерт|dessert|выпеч|випіч/, ["cream", "vanilla", "caramel", "chocolate", "pastry", "coffee", "nuts"]],
  [/ягод|ягід|berr/, ["berries", "strawberry", "raspberry", "blueberry", "blackcurrant", "cherry", "barberry"]],
  [/тропи|экзот|екзот|tropic/, ["mango", "passion", "pineapple", "coconut", "guava", "lychee", "banana"]],
  [/цитрус|citrus/, ["lemon", "lime", "orange", "grapefruit"]],
  [/фрукт|fruit/, ["apple", "pear", "peach", "mango", "pineapple", "banana", "kiwi", "orange", "plum", "grape", "melon", "watermelon"]],
  [/пря|spic|зимн|тепл|уют/, ["cinnamon", "tea", "plum", "orange"]],
  [/коктейл|cocktail|алкогол/, ["alcohol", "lime", "mint"]],
  [/цвет|флор|квіт|flower/, ["rose", "lychee"]],
];
// Быстрые фильтры: микс попадает в профиль, если вкусы профиля занимают в нём от 40%
window.PROFILES = [
  ["fruit", "🍑 Фруктовые", ["apple", "pear", "peach", "mango", "pineapple", "banana", "kiwi", "orange", "plum", "grape", "melon", "watermelon", "guava", "lychee", "passion"]],
  ["fresh", "❄️ Свежие", ["mint", "ice", "lime", "lemon", "grapefruit", "cactus"]],
  ["berry", "🍓 Ягодные", ["berries", "strawberry", "raspberry", "blueberry", "blackcurrant", "cherry", "barberry", "pomegranate"]],
  ["citrus", "🍋 Цитрусовые", ["lemon", "lime", "orange", "grapefruit", "lemonade"]],
  ["dessert", "🍰 Десертные", ["cream", "vanilla", "caramel", "chocolate", "pastry", "coffee", "nuts", "gum"]],
  ["spicy", "🌶 Пряные", ["cinnamon", "tea", "anise", "plum"]],
  ["floral", "🌸 Цветочные", ["rose", "lychee"]],
  ["exotic", "🌴 Экзотика", ["mango", "passion", "pineapple", "coconut", "guava", "lychee", "cactus"]],
  ["drinks", "🍹 Напитки", ["cola", "lemonade", "alcohol", "tea", "coffee"]],
];
window.inProfile = function (mix, profileId) {
  const p = PROFILES.find((x) => x[0] === profileId);
  if (!p) return true;
  const total = mix.p.reduce((s, [, pct]) => s + pct, 0);
  const share = mix.p.filter(([f]) => p[2].includes(f)).reduce((s, [, pct]) => s + pct, 0);
  return share / total >= 0.4;
};

// Вкусы, о которых говорит слово запроса: прямые («кавун») и через настроение («свежее»)
window.flavorsForWord = function (w) {
  const set = new Set(detectFlavors(w));
  MOODS.forEach(([re, list]) => { if (re.test(w)) list.forEach((f) => set.add(f)); });
  return [...set];
};

// Подбирает миксы под табаки с полки: какие можно забить сейчас и каких не хватает по одному вкусу
window.matchMixes = function (shelfItems) {
  const have = {}; // вкус -> [название табака]
  shelfItems.forEach((t) => (t.tags || []).forEach((tag) => (have[tag] = have[tag] || []).push(t.label)));
  const ready = [], almost = [];
  MIXES.forEach((m) => {
    const missing = m.p.filter(([f, , opt]) => !opt && !have[f]).map(([f]) => f);
    const parts = m.p.filter(([f, , opt]) => have[f] || !opt);
    const sum = parts.reduce((s, [, pct]) => s + pct, 0);
    const rows = parts.map(([f, pct]) => ({ flavor: f, pct: Math.round((pct * 100) / sum / 5) * 5, tobaccos: have[f] || [] }));
    const fix = 100 - rows.reduce((s, r) => s + r.pct, 0); rows[0].pct += fix; // проценты после округления в сумме 100
    const item = { ...m, rows, missing };
    if (!missing.length) ready.push(item); else if (missing.length === 1 && rows.length > 1) almost.push(item);
  });
  return { ready, almost };
};
