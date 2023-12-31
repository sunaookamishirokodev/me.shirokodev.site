"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Komorebi from "@/images/musics/komorebi.webp";
import NhinKiaTroiToiRoi from "@/images/musics/nhinkiatroitoiroi.jpg";
import FakeLove from "@/images/musics/fakelove.jpg";
import { useEffect, useState, useRef } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import {
  FaCirclePlay,
  FaCirclePause,
  FaShuffle,
  FaRotateLeft,
  FaForwardStep,
  FaBackwardStep,
} from "react-icons/fa6";
const songs = [
  {
    name: "Arcade",
    singer: "Duncan Laurence",
    pic: "https://i1.sndcdn.com/artworks-Rs3hyiBsuuql-0-t500x500.jpg",
    duration: "03:05",
    url: "https://cdn.discordapp.com/attachments/1171073523704418317/1180551443946676314/y2mate.com_-_Duncan_Laurence_Arcade_Lyric_Video_ft_FLETCHER.mp3?ex=657dd535&is=656b6035&hm=449f772fc6912010ea75c2372ea48422a79a4d1c100ca37df29b68733fca8ad0&",
  },
  {
    name: "Ocean Eyes",
    singer: "Billie Eilish",
    pic: "https://i1.sndcdn.com/artworks-000194211850-6zfpyg-t500x500.jpg",
    duration: "03:20",
    url: "https://cdn.discordapp.com/attachments/1171073523704418317/1180557401506730055/y2mate.com_-_Billie_Eilish_Ocean_Eyes_Official_Music_Video.mp3?ex=657ddac2&is=656b65c2&hm=a350d5892f249bac6dbf05f229a59614984a9b5c91fd09c7c428cb2f281ba7be&",
  },
  {
    name: "Lovely",
    singer: "Billie Eilish, Khalid",
    pic: "https://i1.sndcdn.com/artworks-000344377479-prcevs-t500x500.jpg",
    duration: "03:20",
    url: "https://cdn.discordapp.com/attachments/1171073523704418317/1180558724230828062/y2mate.com_-_Billie_Eilish_Khalid_lovely_Official_Music_Video.mp3?ex=657ddbfd&is=656b66fd&hm=cd564ed418b0788827bf4216eb373c14553128f3fb9892dce496c8c1d93595d0&",
  },
  {
    name: "Komorebi | 抖音",
    singer: "m-taku",
    pic: Komorebi,
    duration: "03:32",
    url: "https://cdn.discordapp.com/attachments/1171073523704418317/1179913397270237235/y2mate.com_-_mtaku_Komorebi_017_Nhac_Buon_Khong_Loi_Tiktok_Trung_Quoc.mp3?ex=657b82fb&is=65690dfb&hm=32e6cd1fc036933556429af8c385de31d1281c09a598ec78727920a89079260f&",
  },
  {
    name: "你看，天黑了",
    singer: "魔鬼花园",
    pic: NhinKiaTroiToiRoi,
    duration: "01:20",
    url: "https://cdn.discordapp.com/attachments/1171073523704418317/1179547664166162462/y2mate.com_-_Cau_xem_troi_toi_roi_Khu_vuon_ma_quy.mp3?ex=657a2e5e&is=6567b95e&hm=4e61e08e5a19b2dfe9c30db0d1e2ec17bf56151991d9a7cd62415e07e971595e&",
  },
  {
    name: "Nơi này có anh",
    singer: "Sơn Tùng M-TP",
    pic: "https://i1.sndcdn.com/artworks-000207591946-8stoib-t500x500.jpg",
    duration: "04:38",
    url: "https://cdn.discordapp.com/attachments/1171073523704418317/1180531918631076032/y2mate.com_-_NOI_NAY_CO_ANH_OFFICIAL_MUSIC_VIDEO_SON_TUNG_MTP.mp3?ex=657dc306&is=656b4e06&hm=4a38aed5d6423ed8a17b3ad99170cfd905382d606c05b5f93049a6306054218b&",
  },
  {
    name: "Love Is Gone (Acoustic)",
    singer: "SLANDER, Dylan Matthew",
    pic: "https://i1.sndcdn.com/artworks-000636297964-248e9u-t500x500.jpg",
    duration: "02:58",
    url: "https://cdn.discordapp.com/attachments/1171073523704418317/1180661776384262234/y2mate.com_-_SLANDER_Love_Is_Gone_ft_Dylan_Matthew_Acoustic.mp3?ex=657e3bf7&is=656bc6f7&hm=40b9b769649550c1ffbe7afaae2f969e7ac0e0f4831dba956b28a45f292d13a0&",
  },
  {
    name: "Happy For You",
    singer: "Lukas Graham, Vũ",
    pic: "https://i1.sndcdn.com/artworks-Eza7Bnk4T3V9-0-t500x500.jpg",
    duration: "03:47",
    url: "https://cdn.discordapp.com/attachments/1171073523704418317/1180513700994633779/y2mate.com_-_Lukas_Graham_Happy_For_You_feat_Vu_Performance_Video.mp3?ex=657db20f&is=656b3d0f&hm=e9fd81c4459708bc93605b1b169819800f68ee40a0e21aa218744796fe79e8d3&",
  },
  {
    name: "Payphone × Call Me Maybe",
    singer: "Anthem Lights",
    pic: "https://i1.sndcdn.com/artworks-slkoM7pzaij4zvIC-AHYhyQ-t500x500.jpg",
    duration: "03:09",
    url: "https://cdn.discordapp.com/attachments/1171073523704418317/1187167238772494406/y2mate.com_-_LyricsVietsub_Payphone_Call_Me_Maybe_Anthem_Lights.mp3?ex=6595e6a6&is=658371a6&hm=45a9b62b7f50a9df2761280ea1557f865bb576942bd54b9f4d797311c2b614cb&",
  },
  {
    name: "방탄소년단",
    singer: "BTS",
    pic: FakeLove,
    duration: "04:12",
    url: "https://cdn.discordapp.com/attachments/1171073523704418317/1180128112235790367/y2mate.com_-_BTS_Fake_Love_Piano_Cover.mp3?ex=657c4af3&is=6569d5f3&hm=b7cc7fef2f3413870ec457df41532d22d0a22fccc568045009acbf2ab5c35176&",
  },
];

export default function Musics() {
  const [audio, setAudio] = useState<null | HTMLAudioElement>(null);
  const [crrIndex, setCrrIndex] = useState<number>(0);
  const [crrImg, setCrrImg] = useState<string | StaticImport>(songs[0].pic);
  const [crrTime, setCrrTime] = useState<number>(0);
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const [isLoop, setIsLoop] = useState<boolean>(false);
  const [IDinterval, setIDInterval] = useState<any>(null);

  const trackRef = useRef<null | HTMLDivElement>(null);
  const thumbRef = useRef<null | HTMLDivElement>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    delay: 1000,
  });

  useEffect(() => {
    setAudio(new Audio());
  }, []);

  function shuffle() {
    if (audio) {
      const newIndex = Math.floor(Math.random() * songs.length);
      if (newIndex === crrIndex) shuffle();
      handlePause();
      setCrrTime(0);
      setCrrIndex(newIndex);
      setCrrImg(songs[newIndex].pic);
      audio.src = songs[newIndex].url;
      audio.load();
      handlePlay();
    }
  }

  if (audio)
    audio.onended = () => {
      if (isLoop) {
        handlePause();
        audio.currentTime = 0;
        handlePlay();
      } else if (isShuffle) {
        shuffle();
      } else {
        handleNextSong();
      }
    };

  useEffect(() => {
    if (audio) {
      audio.src = songs[0].url;
    }
  }, [audio]);

  useEffect(() => {
    if (audio) audio.currentTime = crrTime;
  }, [crrTime, audio]);

  const handlePlay = () => {
    if (audio) {
      audio.play();
      setIsPlay(true);
      const interval = setInterval(() => {
        if (trackRef.current && thumbRef.current) {
          thumbRef.current.style.right = `${
            100 - (audio.currentTime / audio.duration) * 100
          }%`;
        }
      }, 1000);
      setIDInterval(interval);
    }
  };

  const handlePause = () => {
    if (audio) {
      audio.pause();
      setIsPlay(false);
      clearInterval(IDinterval);
    }
  };

  const handleShuffle = () => setIsShuffle(!isShuffle);
  const handleLoop = () => setIsLoop(!isLoop);

  const handleNextSong = () => {
    let newIndex = crrIndex;
    if (audio) {
      handlePause();
      if (crrIndex < songs.length - 1) {
        newIndex++;
      } else {
        newIndex = 0;
      }
      setCrrTime(0);
      setCrrIndex(newIndex);
      setCrrImg(songs[newIndex].pic);
      audio.src = songs[newIndex].url;
      audio.load();
      handlePlay();
    }
  };

  const handlePrevSong = () => {
    let newIndex = crrIndex;
    if (audio) {
      handlePause();
      if (crrIndex > 0) {
        newIndex--;
      } else {
        newIndex = songs.length - 1;
      }
      setCrrIndex(newIndex);
      setCrrImg(songs[newIndex].pic);
      setCrrTime(0);
      audio.src = songs[newIndex].url;
      audio.load();
      handlePlay();
    }
  };

  const handleChooseSong = (index: number) => {
    if (audio) {
      handlePause();
      setCrrIndex(index);
      setCrrImg(songs[index].pic);
      setCrrTime(0);
      audio.src = songs[index].url;
      audio.load();
      handlePlay();
    }
  };

  const handleChangeProgress = (e: any) => {
    if (audio && trackRef.current && thumbRef.current) {
      const trackRect = trackRef.current.getBoundingClientRect();
      const percent =
        Math.round(((e.clientX - trackRect.left) * 10000) / trackRect.width) /
        100;
      thumbRef.current.style.right = `${100 - percent}%`;
      audio.currentTime = (percent * audio.duration) / 100;
      const newTime = Math.round(audio.currentTime);
      setCrrTime(newTime);
    }
  };

  return (
    <section
      ref={ref}
      className={`grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-5 ${
        inView ? "fade-in" : "opacity-0"
      }`}
    >
      <div className="div-layout relative col-span-1 min-h-[300px] overflow-y-scroll lg:col-span-3">
        <ul className="absolute left-0 top-0 h-full w-full p-4">
          <li className="grid grid-cols-6 border-b border-white/5 pb-2 pl-16 pr-2">
            <span className="col-span-3 md:col-span-2">Name</span>
            <span className="col-span-3">Singer</span>
            <span className="col-span-1 hidden md:inline-block">Duration</span>
          </li>
          {songs.map(({ name, singer, pic, duration }, index) => {
            return (
              <li
                onClick={() => handleChooseSong(index)}
                key={index}
                className={`flex cursor-pointer gap-2 rounded-md border-b border-white/5 p-2 transition-[background-color_0.1s_linear] hover:bg-white/10
                ${crrIndex === index && isPlay && "!bg-white/20"}`}
              >
                <Image src={pic} alt={`${name} Image`} width={50} height={50} />
                <div className="grid flex-1 grid-cols-6">
                  <span className="col-span-3 my-auto md:col-span-2">
                    {name}
                  </span>
                  <span className="col-span-3 my-auto">{singer}</span>
                  <span className="col-span-1 my-auto hidden md:inline-block">
                    {duration}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="div-layout col-span-1 flex flex-col items-center justify-around gap-3 p-4 lg:col-span-2">
        <span>Now Playing: {songs[crrIndex].name}</span>
        <Image
          src={crrImg}
          alt={`${songs[crrIndex].name} Banner`}
          width={0}
          height={0}
          sizes="100vw"
          className={`w-3/5 animate-circle rounded-full border-4 border-white ${
            !isPlay
              ? "[animation-play-state:paused]"
              : "[animation-play-state:running]"
          }`}
        />
        <div className="flex items-center gap-4 text-lg">
          <FaBackwardStep
            onClick={handlePrevSong}
            className="cursor-pointer opacity-70 hover:opacity-100"
          />
          <FaShuffle
            onClick={handleShuffle}
            className={`cursor-pointer opacity-70 hover:opacity-100 ${
              isShuffle && "!opacity-100"
            }`}
          />
          <FaCirclePause
            onClick={handlePause}
            className={`cursor-pointer text-4xl opacity-70 hover:opacity-100 ${
              !isPlay && "hidden"
            }`}
          />
          <FaCirclePlay
            onClick={handlePlay}
            className={`cursor-pointer text-4xl opacity-70 hover:opacity-100 ${
              isPlay && "hidden"
            }`}
          />
          <FaRotateLeft
            onClick={handleLoop}
            className={`cursor-pointer opacity-70 hover:opacity-100 ${
              isLoop && "!opacity-100"
            }`}
          />
          <FaForwardStep
            onClick={handleNextSong}
            className="cursor-pointer opacity-70 hover:opacity-100"
          />
        </div>
        <div
          onClick={handleChangeProgress}
          ref={trackRef}
          className="relative h-1 w-full rounded-full bg-zinc-700"
        >
          <div
            ref={thumbRef}
            className="absolute left-0 top-0 h-full rounded-full bg-white transition-all hover:bg-emerald-300 hover:after:absolute hover:after:-bottom-1 hover:after:right-0 hover:after:h-3 hover:after:w-3 hover:after:rounded-full hover:after:bg-white "
          />
        </div>
      </div>
    </section>
  );
}
