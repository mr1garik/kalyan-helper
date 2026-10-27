// Офлайн-база: вкусы, бренды украинского рынка и классические миксы.
// Миксы описаны через вкусы, а не бренды, поэтому подходят к любому табаку с полки.

// Порядок важен: распознанный кусок текста вырезается, чтобы «кавун» не стал «кавой»,
// «шоколад» — «колой», а «watermelon» — дыней.
window.FLAVORS = [
  ["watermelon", tx("Арбуз"), /арбуз|кавун|watermelon/],
  ["grapefruit", tx("Грейпфрут"), /грейпфрут|grapefruit|помело|pomelo/],
  ["anise", tx("Двойное яблоко / анис"), /дв[оі]йн\S* яблу?о?к|double apple|ані[сc]|анис|anise|лакриц|licorice/],
  ["melon", tx("Дыня"), /дын|дин[яію]|melon/],
  ["mint", tx("Мята"), /мят|м['’ʼ]ят|mint|перечн/],
  ["ice", tx("Холодок"), /ментол|menthol|\bice\b|лед(?![а-яіїєґё])|льод|лёд|лід|холод|colder|arctic|арктич|frost|freez|\bcool/],
  ["lemonade", tx("Лимонад / содовая"), /лимонад|lemonade|содов|soda|тархун|tarkhun/],
  ["lemon", tx("Лимон"), /лимон|lemon|\blemo\b/],
  ["lime", tx("Лайм"), /лайм|lime/],
  ["orange", tx("Апельсин / мандарин"), /апельсин|orange|мандарин|tangerine|mandarin/],
  ["pineapple", tx("Ананас"), /ананас|pineapple/],
  ["mango", tx("Манго"), /манго|mango|man\.?goo/],
  ["passion", tx("Маракуйя"), /маракуй|passion/],
  ["peach", tx("Персик / абрикос"), /персик|peach|абрикос|apricot/],
  ["banana", tx("Банан"), /банан|banana/],
  ["coconut", tx("Кокос"), /кокос|coconut/],
  ["kiwi", tx("Киви"), /киви|ківі|kiwi/],
  ["lychee", tx("Личи"), /личи|лічі|lychee|litchi/],
  ["guava", tx("Гуава"), /гуав|guava/],
  ["strawberry", tx("Клубника"), /клубни|полуниц|земляни|strawberr/],
  ["raspberry", tx("Малина"), /малин|raspberr/],
  ["blueberry", tx("Черника"), /черник|чорниц|blueberr|голубик|лохин/],
  ["blackcurrant", tx("Смородина"), /смородин|currant/],
  ["cherry", tx("Вишня"), /вишн|черешн|cherry/],
  ["pomegranate", tx("Гранат"), /гранат|granate|pomegranate/],
  ["barberry", tx("Барбарис"), /барбарис|барві|barberr/],
  ["berries", tx("Ягодный микс"), /ягід|ягод|berry|berries|ожин|ежевик|асаї|асаи|acai|брусни|журавлин|клюкв/],
  ["grape", tx("Виноград"), /виноград|grape/],
  ["apple", tx("Яблоко"), /яблук|яблок|apple/],
  ["pear", tx("Груша"), /груш|\bpear/],
  ["plum", tx("Слива"), /слив[аиу]|\bplum/],
  ["cactus", tx("Зелёное: кактус / огурец / алоэ"), /кактус|cactus|алое|алоэ|aloe|огур|огір|cucumber|фейхоа/],
  ["chocolate", tx("Шоколад"), /шоколад|chocolate|choco|брауні|брауни|brownie|какао|cocoa/],
  ["cola", tx("Кола"), /кол[аиу](?![а-яіїєґё])|cola/],
  ["coffee", tx("Кофе"), /кофе|кав[аи](?![а-яіїєґё])|coffee|espresso|латте|капучин/],
  ["tea", tx("Чай"), /чай|чаю|\btea\b|матча|бергамот/],
  ["caramel", tx("Карамель"), /карамел|caramel|toffee|ирис/],
  ["vanilla", tx("Ваниль"), /ванил|ваніл|vanill?a/],
  ["cream", tx("Сливки / десерт"), /крем|cream|молок|milk|чиз?кейк|чізкейк|cheesecake|йогурт|yogh?urt|пломбир|морозив|мороженое|шейк|shake/],
  ["pastry", tx("Выпечка"), /пирог|пиріг|\bpie\b|печив|печень|cookie|тарт(?![а-яіїєґё])|\btart|вафл|круас|пончик|donut|flakes|пластівц|хлопья|овсян|вівсян/],
  ["nuts", tx("Орехи"), /горіх|горiх|орех|\bnut|фундук|мигдал|миндал|фисташ|фісташ|hazelnut|almond|pistach|арахис|арахіс/],
  ["gum", tx("Жвачка / конфеты"), /жвачк|жуйк|\bgum|bubble|конфет|цукерк|льодяник|леденц|candy|мармелад|желе|jelly|shot\b/],
  ["rose", tx("Цветы"), /(?<![а-яіїєґё])роз[аыи](?![а-яіїєґё])|троянд|\brose\b|лаванд|lavender|жасмин|jasmin|лотос|лотус|lotus|бузин|elderflower/],
  ["cinnamon", tx("Пряности"), /кориц|cinnamon|прянощ|пряност|спец[іи]|spice|кардамон|имбир|імбир|ginger|гвоздик/],
  ["alcohol", tx("Коктейль"), /(?<![а-яіїєґё])ром(?![а-яіїєґё])|\brum\b|мохито|mojito|маргарит|margarit|апероль|aperol|апер[оа]|текіл|текил|tequila|шампан|просекко|prosecco|спр[іи]тц|spritz|пунш|punch|кюрасао|curacao|(?<![а-яіїєґё])джин(?![а-яіїєґё])/],
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
  tx("Самсварил"), tx("Swipe (без никотина)"), tx("IndiGo (без никотина)"), tx("Pixtea (без никотина)"), tx("Space Tea (чайная смесь)"),
];

// Российские бренды: официально в Украину не ввозятся, приложение предупредит
window.RU_BRANDS = /dark\s?side|дарксайд|must\s?have|мастхэв|black\s?burn|блэк ?берн|chabacco|duft|sebero|satyr|северн|північн|element|элемент|spectrum|honey badger|smoke angels|сарма|sarma|chaba\b|jent|nash|(?<![а-яіїєґё])наш(?![а-яіїєґё])/i;

// Примеры: такие позиции видели в украинских магазинах (наличие меняется)
// i18n-skip-start — названия товаров из магазинов не переводим
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
// i18n-skip-end

// Классические сочетания. o: true — необязательный компонент, без него микс тоже работает
window.MIXES = [
  { n: tx("Арбузный бриз"), p: [["watermelon", 60], ["mint", 25], ["lime", 15, 1]], d: tx("Сочный арбуз, мятная свежесть и лёгкая кислинка.") },
  { n: tx("Дыня-манго со льдом"), p: [["melon", 50], ["mango", 30], ["ice", 20, 1]], d: tx("Медовая дыня и спелое манго, холодок по желанию.") },
  { n: tx("Грейпфрут-мята"), p: [["grapefruit", 70], ["mint", 30]], d: tx("Горьковато-кислый цитрус и мята. Классика, которая не надоедает.") },
  { n: tx("Мохито"), p: [["lime", 50], ["mint", 35], ["lemon", 15, 1]], d: tx("Лайм и мята, как в коктейле.") },
  { n: tx("Черника-лимон"), p: [["blueberry", 60], ["lemon", 40]], d: tx("Сладкая черника с ярким лимоном.") },
  { n: tx("Малина-лайм"), p: [["raspberry", 60], ["lime", 40]], d: tx("Ягодная сладость и кислый лайм, очень освежает.") },
  { n: tx("Клубника-киви"), p: [["strawberry", 55], ["kiwi", 45]], d: tx("Сладко-кислая фруктовая пара.") },
  { n: tx("Клубнично-банановый смузи"), p: [["strawberry", 50], ["banana", 35], ["cream", 15, 1]], d: tx("Мягкий десертный смузи.") },
  { n: tx("Пина колада"), p: [["pineapple", 50], ["coconut", 40], ["cream", 10, 1]], d: tx("Ананас и кокос, пляжный вайб.") },
  { n: tx("Тропики"), p: [["mango", 40], ["passion", 35], ["pineapple", 25]], d: tx("Насыщенный тропический коктейль.") },
  { n: tx("Персик-маракуйя"), p: [["peach", 55], ["passion", 45]], d: tx("Сладкий персик с кислинкой маракуйи.") },
  { n: tx("Вишнёвая кола"), p: [["cola", 60], ["cherry", 40]], d: tx("Газировка с вишней. Беспроигрышный вариант.") },
  { n: tx("Кола-лайм"), p: [["cola", 70], ["lime", 30]], d: tx("Кола с долькой лайма.") },
  { n: tx("Яблочный штрудель"), p: [["apple", 60], ["cinnamon", 20], ["pastry", 20, 1]], d: tx("Печёное яблоко с корицей.") },
  { n: tx("Двойное яблоко с мятой"), p: [["anise", 75], ["mint", 25, 1]], d: tx("Старая школа: анисовое яблоко.") },
  { n: tx("Ягодный лимонад"), p: [["berries", 50], ["lemonade", 35], ["ice", 15, 1]], d: tx("Летний лимонад с ягодами.") },
  { n: tx("Гранат-грейпфрут"), p: [["pomegranate", 50], ["grapefruit", 50]], d: tx("Терпкий и кислый, для любителей не сладкого.") },
  { n: tx("Смородина-мята"), p: [["blackcurrant", 70], ["mint", 30]], d: tx("Насыщенная смородина и холодная мята.") },
  { n: tx("Барбарисовые леденцы"), p: [["barberry", 60], ["lemon", 25], ["ice", 15, 1]], d: tx("Как те самые конфеты из детства.") },
  { n: tx("Чай с лимоном"), p: [["tea", 60], ["lemon", 40]], d: tx("Уютный, не приторный.") },
  { n: tx("Пряный апельсиновый чай"), p: [["tea", 50], ["orange", 30], ["cinnamon", 20, 1]], d: tx("Чай с апельсином и специями, для холодных вечеров.") },
  { n: tx("Личи-роза"), p: [["lychee", 60], ["rose", 25], ["raspberry", 15, 1]], d: tx("Нежный цветочно-фруктовый микс.") },
  { n: tx("Черничный чизкейк"), p: [["blueberry", 50], ["cream", 35], ["vanilla", 15, 1]], d: tx("Десерт с ягодами.") },
  { n: tx("Банан в шоколаде"), p: [["banana", 55], ["chocolate", 45]], d: tx("Плотный сладкий десерт.") },
  { n: tx("Карамельный латте"), p: [["coffee", 50], ["caramel", 30], ["cream", 20, 1]], d: tx("Кофейный десерт.") },
  { n: tx("Апельсин в шоколаде"), p: [["orange", 50], ["chocolate", 50]], d: tx("Как новогодние конфеты.") },
  { n: tx("Пьяная вишня"), p: [["cherry", 55], ["chocolate", 45]], d: tx("Вишня и шоколад.") },
  { n: tx("Манго-лайм"), p: [["mango", 65], ["lime", 35]], d: tx("Сладкое манго, освежённое лаймом.") },
  { n: tx("Дыня-клубника"), p: [["melon", 55], ["strawberry", 45]], d: tx("Сладкий летний микс.") },
  { n: tx("Арбуз-клубника"), p: [["watermelon", 55], ["strawberry", 45]], d: tx("Ягодно-бахчевой, очень сочный.") },
  { n: tx("Арбуз-дыня"), p: [["watermelon", 50], ["melon", 50], ["ice", 10, 1]], d: tx("Бахчевой дуэт.") },
  { n: tx("Виноград-мята"), p: [["grape", 70], ["mint", 30]], d: tx("Классика кальянных.") },
  { n: tx("Виноград-черника"), p: [["grape", 50], ["blueberry", 50]], d: tx("Тёмные ягоды, насыщенно и сладко.") },
  { n: tx("Персиковый чай"), p: [["tea", 50], ["peach", 50]], d: tx("Как холодный чай из бутылки.") },
  { n: tx("Киви-лайм"), p: [["kiwi", 60], ["lime", 40]], d: tx("Зелёный кислый микс.") },
  { n: tx("Ананас-лайм-мята"), p: [["pineapple", 50], ["lime", 30], ["mint", 20]], d: tx("Тропическая свежесть.") },
  { n: tx("Баунти"), p: [["coconut", 60], ["chocolate", 40]], d: tx("Кокос в шоколаде.") },
  { n: tx("Груша-ваниль"), p: [["pear", 60], ["vanilla", 40]], d: tx("Мягкий и нежный.") },
  { n: tx("Ледяные яблоко и груша"), p: [["apple", 45], ["pear", 40], ["ice", 15]], d: tx("Сочный садовый микс с холодком.") },
  { n: tx("Маргарита"), p: [["alcohol", 50], ["lime", 40], ["ice", 10, 1]], d: tx("Коктейльный: лайм с ноткой текилы.") },
  { n: tx("Гуава-клубника"), p: [["guava", 55], ["strawberry", 45]], d: tx("Экзотика с ягодной сладостью.") },
  { n: tx("Цитрусовый взрыв"), p: [["orange", 40], ["lemon", 30], ["grapefruit", 30]], d: tx("Сплошной цитрус, бодрит.") },
  { n: tx("Зелёная свежесть"), p: [["cactus", 50], ["lime", 30], ["mint", 20, 1]], d: tx("Огурец/кактус с лаймом: необычно и очень свежо.") },
  { n: tx("Ягодная жвачка"), p: [["gum", 60], ["berries", 40]], d: tx("Сладкий конфетный микс.") },
  { n: tx("Малина-ваниль"), p: [["raspberry", 60], ["vanilla", 40]], d: tx("Ягодный десерт.") },
  { n: tx("Клубника со сливками"), p: [["strawberry", 60], ["cream", 40]], d: tx("Нежный летний десерт.") },
  { n: tx("Персик-манго"), p: [["peach", 50], ["mango", 50]], d: tx("Спелый, сладкий, фруктовый.") },
  { n: tx("Банан-кокос"), p: [["banana", 50], ["coconut", 50]], d: tx("Сливочная тропика.") },
  { n: tx("Вишня-миндаль"), p: [["cherry", 60], ["nuts", 40]], d: tx("Как вишнёвый ликёр.") },
  { n: tx("Пряная слива"), p: [["plum", 60], ["cinnamon", 25], ["orange", 15, 1]], d: tx("Глинтвейновый вайб.") },
  { n: tx("Лимонный пирог"), p: [["lemon", 50], ["pastry", 35], ["vanilla", 15, 1]], d: tx("Кислый крем на песочном тесте.") },
  { n: tx("Малиновый лимонад"), p: [["raspberry", 45], ["lemonade", 40], ["mint", 15, 1]], d: tx("Летний освежающий.") },
  { n: tx("Ледяная черника"), p: [["blueberry", 75], ["ice", 25]], d: tx("Простая, но мощная пара.") },
  { n: tx("Гранат-малина"), p: [["pomegranate", 50], ["raspberry", 50]], d: tx("Красные ягоды с терпкостью.") },
  { n: tx("Апельсин-маракуйя"), p: [["orange", 50], ["passion", 50]], d: tx("Сочный кисло-сладкий сок.") },
  { n: tx("Кофе с орехом"), p: [["coffee", 55], ["nuts", 45]], d: tx("Плотный, для любителей не фруктового.") },
  { n: tx("Ягоды с лавандой"), p: [["berries", 65], ["rose", 35]], d: tx("Ягоды с цветочной ноткой.") },
  { n: tx("Красный морс"), p: [["blackcurrant", 40], ["raspberry", 35], ["lemon", 25]], d: tx("Кисло-сладкий ягодный морс.") },
  { n: tx("Мятная жвачка"), p: [["gum", 50], ["mint", 50]], d: tx("Бабл-гам с холодной мятой.") },
  { n: tx("Ванильная кола"), p: [["cola", 70], ["vanilla", 30]], d: tx("Кола со сливочной ноткой.") },
  { n: tx("Яблоко-киви"), p: [["apple", 50], ["kiwi", 50]], d: tx("Зелёный и кисленький.") },
  { n: tx("Абрикос-ваниль"), p: [["peach", 60], ["vanilla", 40]], d: tx("Мягкий фруктовый десерт.") },
  { n: tx("Апероль спритц"), p: [["alcohol", 50], ["orange", 35], ["grapefruit", 15, 1]], d: tx("Горьковатый апельсиновый коктейль.") },
  { n: tx("Арбуз-лимонад"), p: [["watermelon", 55], ["lemonade", 45]], d: tx("Арбузная газировка.") },
  { n: tx("Ягоды-мята-лёд"), p: [["berries", 60], ["mint", 20], ["ice", 20]], d: tx("Ягоды и много холода.") },
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
  ["fruit", tx("🍑 Фруктовые"), ["apple", "pear", "peach", "mango", "pineapple", "banana", "kiwi", "orange", "plum", "grape", "melon", "watermelon", "guava", "lychee", "passion"]],
  ["fresh", tx("❄️ Свежие"), ["mint", "ice", "lime", "lemon", "grapefruit", "cactus"]],
  ["berry", tx("🍓 Ягодные"), ["berries", "strawberry", "raspberry", "blueberry", "blackcurrant", "cherry", "barberry", "pomegranate"]],
  ["citrus", tx("🍋 Цитрусовые"), ["lemon", "lime", "orange", "grapefruit", "lemonade"]],
  ["dessert", tx("🍰 Десертные"), ["cream", "vanilla", "caramel", "chocolate", "pastry", "coffee", "nuts", "gum"]],
  ["spicy", tx("🌶 Пряные"), ["cinnamon", "tea", "anise", "plum"]],
  ["floral", tx("🌸 Цветочные"), ["rose", "lychee"]],
  ["exotic", tx("🌴 Экзотика"), ["mango", "passion", "pineapple", "coconut", "guava", "lychee", "cactus"]],
  ["drinks", tx("🍹 Напитки"), ["cola", "lemonade", "alcohol", "tea", "coffee"]],
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
  // Названия вкусов на языке интерфейса: «Strawberry», «Полуниця»
  if (w.length >= 3) FLAVORS.forEach(([id, name]) => {
    if (name.toLowerCase().split(/[ /:]+/).some((part) => part.startsWith(w))) set.add(id);
  });
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
