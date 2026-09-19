const commands = [
  ["⭐ Таймер/Сгорающее", "Скачивает сгорающее (self-destructing) медиа, если ответить на него этой командой: ща инет", "ща инет", 0],
  ["troll", "Теперь работает не как обычный триггер, а полностью заваливает собеседника потоком троллинговых сообщений", ".troll", 1, ".untroll"],
  ["kawaii", "Кавайный режим: переключает ответы бота на милый стиль с эмодзи, обращениями в духе «семпай» и аниме-эстетикой", ".kawaii", 1, ".unkawaii"],
  ["modvoice", "Меняет голос в голосовом сообщении: ответьте командой на ГС и выберите бас, чипмунк, робота, эхо, телефон или инопланетянина", ".modvoice", 0],
  ["обнять", "RP-команда: обнять собеседника", ".обнять", 0],
  ["поцеловать", "RP-команда: поцеловать собеседника", ".поцеловать", 0],
  ["ударить", "RP-команда: ударить собеседника", ".ударить", 0],
  ["укусить", "RP-команда: укусить собеседника", ".укусить", 0],
  ["погладить", "RP-команда: погладить собеседника", ".погладить", 0],
  ["лизнуть", "RP-команда: лизнуть собеседника", ".лизнуть", 0],
  ["пнуть", "RP-команда: пнуть собеседника", ".пнуть", 0],
  ["шлепнуть", "RP-команда: шлепнуть собеседника", ".шлепнуть", 0],
  ["пожать", "RP-команда: пожать руку собеседнику", ".пожать", 0],
  ["удушить", "RP-команда: разыграть сцену удушения", ".удушить", 0],
  ["подкормить", "RP-команда: подкормить собеседника", ".подкормить", 0],
  ["напоить", "RP-команда: напоить собеседника", ".напоить", 0],
  ["укрыть", "RP-команда: укрыть собеседника", ".укрыть", 0],
  ["поздравить", "RP-команда: поздравить собеседника", ".поздравить", 0],
  ["успокоить", "RP-команда: успокоить собеседника", ".успокоить", 0],
  ["расцеловать", "RP-команда: расцеловать собеседника", ".расцеловать", 0],
  ["задушить", "RP-команда: разыграть сцену удушения", ".задушить", 0],
  ["поприветствовать", "RP-команда: поприветствовать собеседника", ".поприветствовать", 0],
  ["попрощаться", "RP-команда: попрощаться с собеседником", ".попрощаться", 0],
  ["испугать", "RP-команда: испугать собеседника", ".испугать", 0],
  ["rps", "Игра «Камень, ножницы, бумага» между участниками", ".rps", 0],
  ["rec", "Игра на реакцию: побеждает тот, кто быстрее нажмёт кнопку", ".rec", 0],
  ["kub", "Бросок кубика через бота: игроки сравнивают выпавшие числа, большее число побеждает", ".kub", 0],
  ["sap", "Игра «Сапёр» с игровым полем и скрытыми минами", ".sap", 0],
  ["ter", "Игра за территории с собеседником: захватывайте поле и соревнуйтесь за победу", ".ter", 0],
  ["8ball", "Отвечает на заданный вопрос как магический шар предсказаний", ".8ball Будет ли сегодня дождь?", 0],
  ["afk", "Включает режим AFK с указанной причиной и уведомляет о нём в чате", ".afk Отошел обедать", 1, ".unafk"],
  ["unafk", "Принудительно выключает режим AFK", ".unafk", 0],
  ["ai", "Отправляет запрос к ИИ текстом или ответом на сообщение", ".ai Как работают черные дыры?", 1],
  ["avatar", "Скачивает текущую аватарку — свою или пользователя, на сообщение которого дан ответ", ".avatar", 0],
  ["bs", "Мини-игра «Морской бой» на поле 6×6", ".bs", 0],
  ["chp", "Максимально ухудшает качество фото (эффект deepfry)", ".chp", 0],
  ["clock", "Ставит живые часы для указанного города в имя профиля Telegram", ".clock Москва", 1, ".unclock"],
  ["downsc", "Скачивает аудиотрек с SoundCloud по ссылке", ".downsc https://soundcloud.com/...", 0],
  ["duel", "Игра «Дуэль на револьверах» между двумя участниками", ".duel", 0],
  ["dumb", "Искажает текст в стиле «олбанского языка» (падонкаффский стиль)", ".dumb Привет, как дела?", 0],
  ["geo", "Ищет адрес по названию и отправляет геолокацию в чат", ".geo Москва, Красная площадь", 0],
  ["gpt", "Включает автоматические ответы нейросети на сообщения пользователя", ".gpt", 1, ".ungpt"],
  ["ungpt", "Выключает автоматические ответы нейросети", ".ungpt", 0],
  ["guess", "Игра «Угадай число» в диапазоне от 1 до 100", ".guess", 0],
  ["help", "Отправляет ссылку на полный список команд бота", ".help", 0],
  ["haha", "Спамит в чат серией хаотичных сообщений со смехом", ".haha", 0],
  ["ilv", "Дублирует указанный текст до 100 раз подряд", ".ilv 5 Я тебя люблю ❤️", 0],
  ["krug", "Конвертирует видео или GIF в видео-кружок (video note)", ".krug", 0],
  ["leet", "Преобразует текст в стиле Leet-speak (замена букв на символы/цифры)", ".leet Привет мир", 0],
  ["love", "Отправляет анимацию признания в любви", ".love", 0],
  ["mute", "Заглушает пользователя на указанное время с автоматическим удалением его сообщений", ".mute 1h", 1, ".unmute"],
  ["nomute", "Обходит ограничение на отправку сообщений в чате путём переотправки", ".nomute", 1, ".unnomute"],
  ["unnomute", "Отключает функцию обхода ограничений чата (NoMute)", ".unnomute", 0],
  ["info", "Показывает предполагаемую дату регистрации аккаунта в Telegram", ".info", 0],
  ["print", "Показывает анимацию печатания указанного текста", ".print Привет мир", 0],
  ["ping", "Замеряет пинг до серверов Telegram", ".ping", 0],
  ["panic", "Экстренно удаляет последние N сообщений из чата", ".panic 50", 0],
  ["coin", "Подбрасывает монетку — орёл или решка", ".coin", 0],
  ["untroll", "Отключает функцию троллинга", ".untroll", 0],
  ["save", "Скачивает видео из TikTok без водяного знака по ссылке", ".save https://vm.tiktok.com/...", 1],
  ["shadow", "Проверяет TikTok-видео на наличие теневого бана", ".shadow https://vm.tiktok.com/...", 0],
  ["sgs", "Конвертирует медиафайл в голосовое сообщение", ".sgs", 0],
  ["ss", "Делает скриншот указанной веб-страницы", ".ss google.com", 0],
  ["snos", "Спамит коды авторизации Telegram на указанный номер", ".snos +79991234567", 1],
  ["shazam", "Распознаёт музыку из голосового или видеосообщения", ".shazam", 0],
  ["spinf", "Анализирует EXIF-метаданные фото", ".spinf", 0],
  ["spam", "Отправляет массовый спам указанным текстом N раз", ".spam 5 привет", 0],
  ["song", "Скачивает песню с YouTube вместе с обложкой", ".song Linkin Park - Numb", 0],
  ["usernames", "Ищет историю старых юзернеймов профиля", ".usernames @durov", 0],
  ["typing", "Показывает фейковый статус «печатает...» в течение N секунд", ".typing 10", 0],
  ["ttt", "Игра «Крестики-нолики» между двумя участниками", ".ttt", 0],
  ["wsag", "Включает автоматическое удаление стикеров и GIF в чате", ".wsag", 1, ".unwsag"],
  ["unwsag", "Отключает автоматическое удаление стикеров и GIF", ".unwsag", 0],
  ["word", "Игра «Угадай слово» с 6 попытками", ".word кошка", 0],
  ["weather", "Показывает текущую погоду и прогноз на завтра для указанного города", ".weather Москва", 0],
  ["voice", "Переводит голосовое сообщение в текст с помощью Whisper", ".voice", 0],
  ["tts", "Озвучивает текст голосом (Edge TTS с применением эффектов)", ".tts привет", 0],
  ["check", "Проверяет пользователя по базе данных PastureBot", ".check", 0],
  ["stair", "Если текст состоит из пяти слов, отправляет их отдельными сообщениями «лесенкой»", ".stair текст", 0],
  ["gs", "Озвучивает текст женским или мужским голосом без рекламы бота", ".gs ж/м текст", 0],
  ["dox", "Докс правда визуальный", ".dox", 0],
  ["frame", "Ответь на фото и получишь медиа в рамке как из тт", ".frame", 0],
  ["memz", "Ответь на картинку и напиши текст выйдет демотиватор", ".memz текст", 0],
  ["fb", "Делает текст жирным", ".fb текст", 0],
  ["fi", "Делает текст курсивом", ".fi текст", 0],
  ["fu", "Делает текст подчёркнутым", ".fu текст", 0],
  ["fst", "Делает текст зачёркнутым", ".fst текст", 0],
  ["fq", "Оформляет текст как цитату", ".fq текст", 0],
  ["fm", "Делает текст моноширинным", ".fm текст", 0],
  ["fsp", "Скрывает текст под спойлер", ".fsp текст", 0],
  ["f", "Сбрасывает форматирование текста", ".f", 0],
  ["clonep", "Копирует профиль пользователя, на сообщение которого дан ответ", ".clonep", 1, ".unclonep"],
  ["unclonep", "Возвращает ваш исходный профиль после клонирования", ".unclonep", 0],
  ["clone", "Включает автоматическое клонирование сообщений собеседника", ".clone", 1, ".unclone"],
  ["unclone", "Отключает автоматическое клонирование сообщений", ".unclone", 0],
  ["virustotal", "Проверяет файл на вирусы (ответом на файл или прикреплением)", ".virustotal", 0],
  ["blur", "Блюрит медиа на указанный процент (реплаем)", ".blur 50", 0],
  ["ld", "Делает голосовое сообщение тише на указанный процент (по умолчанию 25%)", ".ld 25", 0],
  ["short", "Быстро сокращает длинную ссылку", ".short https://google.com", 0],
  ["link", "Генерирует ссылку в вашу личку с предустановленным текстом", ".link Привет, я по поводу...", 0],
  ["wbl", "Включает встроенный антимат функционал", ".wbl", 1, ".unwbl"],
  ["unwbl", "Отключает встроенный антимат функционал", ".unwbl", 0],
  ["livegeo", "Обновляет трансляцию геопозиции на указанную локацию на 15 минут", ".livegeo Москва", 0],
];

const grid = document.querySelector("#command-grid");
const search = document.querySelector("#search-input");
const empty = document.querySelector("#empty-state");
const resultsCount = document.querySelector("#results-count");
const rpNames = new Set([
  "обнять", "поцеловать", "ударить", "укусить", "погладить", "лизнуть",
  "пнуть", "шлепнуть", "пожать", "удушить", "подкормить", "напоить",
  "укрыть", "поздравить", "успокоить", "расцеловать", "задушить",
  "поприветствовать", "попрощаться", "испугать",
]);
const displayNames = {
  ".⭐.. Таймер/Сгорающее": "Сгорающее медиа",
  troll: "Троллинг",
  kawaii: "Кавайный режим",
  modvoice: "Изменение голоса",
  gpt: "AI",
  ungpt: "Отключение AI",
  ai: "AI-запрос",
  afk: "Режим AFK",
  unafk: "Отключение AFK",
  avatar: "Аватарка",
  clock: "Живые часы",
  downsc: "SoundCloud",
  duel: "Дуэль",
  dumb: "Падонкаффский стиль",
  geo: "Геолокация",
  guess: "Угадай число",
  help: "Помощь",
  haha: "Хаотичный смех",
  ilv: "Признание в любви",
  krug: "Видео-кружок",
  leet: "Leet-стиль",
  love: "Любовь",
  mute: "Мут",
  nomute: "Обход ограничений",
  unnomute: "Отключение обхода",
  info: "Информация о профиле",
  print: "Печатание",
  ping: "Пинг",
  panic: "Экстренное удаление",
  save: "TikTok без водяного знака",
  shadow: "Теневой бан",
  sgs: "Войс из медиа",
  ss: "Скриншот сайта",
  shazam: "Распознавание музыки",
  spinf: "EXIF-анализ",
  spam: "Спам",
  song: "Музыка с YouTube",
  usernames: "История юзернеймов",
  typing: "Статус печати",
  wsag: "Автоудаление медиа",
  unwsag: "Отключение автоудаления",
  weather: "Погода",
  voice: "Голос в текст",
  tts: "Озвучка текста",
  check: "Проверка пользователя",
  virustotal: "Проверка файла",
  blur: "Размытие медиа",
  short: "Сокращение ссылки",
  link: "Личная ссылка",
  wbl: "Антимат",
  unwbl: "Отключение антимата",
  livegeo: "Трансляция геопозиции",
  rps: "Камень, ножницы, бумага",
  rec: "Быстрая реакция",
  kub: "Бросок кубика",
  sap: "Сапёр",
  ter: "Бой за территории",
};

document.querySelector("#command-count").textContent = commands.length;
function render() {
  const query = search.value.trim().toLowerCase();
  const filtered = commands
    .map((command, index) => ({ command, index }))
    .filter(({ command: [name, description, example] }) => [name, displayNames[name] || name, description, example].join(" ").toLowerCase().includes(query))
    .sort((a, b) => (b.command[3] || 0) - (a.command[3] || 0) || a.index - b.index)
    .map(({ command }) => command);
  const regular = filtered.filter(([name]) => !rpNames.has(name));
  const prioritized = regular.filter(([, , , priority]) => priority === 1);
  const ordinary = regular.filter(([, , , priority]) => priority !== 1);
  const rp = filtered.filter(([name]) => rpNames.has(name));
  const card = ([name, description, example, priority, disableCommand], index) => `
    <article class="command-card" style="animation-delay:${Math.min(index * 18, 180)}ms">
      <div class="card-top">
        <div class="command-name">${escapeHtml(displayNames[name] || name)}</div>
      </div>
      <p class="command-description">${escapeHtml(description)}</p>
      <div class="example-label">Использование</div>
      <div class="example">
        <code>${escapeHtml(example)}</code>
        <button class="copy-btn" data-copy="${escapeAttribute(example)}" aria-label="Скопировать команду">Копировать</button>
      </div>
      ${disableCommand ? `<div class="disable-command">Отключить: <code>${escapeHtml(disableCommand)}</code></div>` : ""}
    </article>
  `;
  const rpBlock = rp.length ? `
    <details class="rp-quote" ${query ? "open" : ""}>
      <summary><span>RP-команды</span><small>${rp.length} команд</small></summary>
      <div class="rp-list">${rp.map((command, index) => card(command, index)).join("")}</div>
    </details>
  ` : "";
  const priorityBlock = prioritized.length ? `
    <details class="priority-cloud" open>
      <summary><span>Приоритетные команды</span><small>${prioritized.length} команд</small></summary>
      <div class="priority-list">${prioritized.map((command, index) => card(command, index)).join("")}</div>
    </details>
  ` : "";
  const separator = prioritized.length && ordinary.length ? `<div class="commands-divider" aria-hidden="true"></div>` : "";
  grid.innerHTML = rpBlock + priorityBlock + separator + ordinary.map(card).join("");
  empty.hidden = filtered.length > 0;
  resultsCount.textContent = `${filtered.length} ${pluralize(filtered.length, "результат", "результата", "результатов")}`;
}

function pluralize(n, one, few, many) {
  const mod10 = n % 10, mod100 = n % 100;
  return mod10 === 1 && mod100 !== 11 ? one : mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20) ? few : many;
}
function escapeHtml(value) { return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char])); }
function escapeAttribute(value) { return escapeHtml(value).replace(/`/g, "&#096;"); }

search.addEventListener("input", render);
document.addEventListener("click", async (event) => {
  const button = event.target.closest(".copy-btn");
  if (!button) return;
  try {
    await navigator.clipboard.writeText(button.dataset.copy);
    button.classList.add("copied");
    document.querySelector("#toast").classList.add("show");
    setTimeout(() => {
      button.classList.remove("copied");
      document.querySelector("#toast").classList.remove("show");
    }, 1500);
  } catch { button.textContent = "Не удалось"; }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== search) { event.preventDefault(); search.focus(); }
});
render();
