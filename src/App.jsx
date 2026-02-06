import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
  const phrases = [
    "Нет… 😢",
    "Ты уверена?",
    "Прямо уверена?",
    "Подумай ещё раз! 💭",
    "Последний шанс! ❤️",
    "Точно нет? 🥺",
    "Ты можешь пожалеть потом…",
    "Дай этому ещё один шанс! 🌸",
    "Ты совсем уверена?",
    "Это может быть ошибкой… 😔",
    "Имей сердце! 💖",
    "Не будь такой холодной… ❄️",
    "Пересмотрела своё решение?",
    "Не хочешь передумать? 🥹",
    "Это твой окончательный ответ?",
    "Ты разбиваешь моё сердце… 💔",
    "Это твой окончательный ответ?",
    "Ты разбиваешь моё сердце… 💔",
    "Пожалуйста… 😢 Ты разбиваешь моё сердце",
  ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/YFYtOlJWYbUAAAAj/love-couple.gif"/>
          <div className="text-4xl md:text-6xl font-bold my-4">
            Ура! Ты моя Валентинка❤️
          </div>
        </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.webp"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Ты будешь моей Валентинкой?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Да
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "Нет" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}