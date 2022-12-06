console.log("Welcom to My song");

// Initialize the variable

let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
// audioElement.play();
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let songs = [
  {
    songName: "Clase",
    filePath: "songs/1.mp3",
    coverPath: "covers/cover2.jpg",
  },
  {
    songName: "12Bande",
    filePath: "songs/2.mp3",
    coverPath: "covers/cover3.jpg",
  },
  {
    songName: "52GajKaLehnga",
    filePath: "songs/3.mp3",
    coverPath: "covers/cover4.jpg",
  },
  {
    songName: "AggBandok",
    filePath: "songs/4.mp3",
    coverPath: "covers/cover5.jpg",
  },
  {
    songName: "Bandok",
    filePath: "songs/5.mp3",
    coverPath: "covers/cover6.jpg",
  },
  {
    songName: "bekhayali",
    filePath: "songs/6.mp3",
    coverPath: "covers/cover11.jpg",
  },
  {
    songName: "BhalwaniGedi",
    filePath: "songs/7.mp3",
    coverPath: "covers/cover8.jpg",
  },
  {
    songName: "Bitch",
    filePath: "songs/8.mp3",
    coverPath: "covers/cover9.jpg",
  },
  {
    songName: "BlackEffect",
    filePath: "songs/9.mp3",
    coverPath: "covers/cover10.jpg",
  },
];

songItem.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByClassName("coverImg")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
});

// audioElement play

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime < -0) {
    audioElement.play();
    // makeAllPlays();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity = 1;
    console.log("play");
    // songItemPlay.classList.remove("fa-pause");
    // songItemPlay.classList.add("fa-play");
  //   e.target.classList.remove("fa-play");
  //   e.target.classList.add("fa-pause");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
    gif.style.opacity = 0;
    console.log("pause");
  }
});

// Listen to Events
// console.log(audioElement.duration);

audioElement.addEventListener("timeupdate", () => {
  // console.log('timeupdate')
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  // console.log(progress);
  // console.log(audioElement.currentTime);
  myProgressBar.value = progress;
  myProgressBar.addEventListener("change", () => {
    audioElement.currentTime =
      (myProgressBar.value * audioElement.duration) / 100;
  });

  if (Math.round(audioElement.currentTime) < 60) {
    document.getElementsByClassName("timestampBottom")[0].innerHTML =
      "0:" + Math.round(audioElement.currentTime);
      document.getElementsByClassName("timestamp")[`${songIndex}`].innerText =
      "0:" + Math.round(audioElement.currentTime);
      console.log("0 se str");
  }    
    
    setTimeout(() => {
      if (
        Math.round(audioElement.currentTime) >= 60 &&
        Math.round(audioElement.currentTime) < 120
        ) {
          document.getElementsByClassName("timestampBottom")[0].innerHTML =
        "01:" + (Math.round(audioElement.currentTime) - 60);
        document.getElementsByClassName("timestamp")[`${songIndex}`].innerText =
      "01:" + (Math.round(audioElement.currentTime) -60);
      console.log("60se bda");
    }
  }, 1000);

  setTimeout(() => {
    if (
      Math.round(audioElement.currentTime) >= 120 &&
      Math.round(audioElement.currentTime) < 180
    ) {
      document.getElementsByClassName("timestampBottom")[0].innerHTML =
      "02:" + (Math.round(audioElement.currentTime) - 120);
      document.getElementsByClassName("timestamp")[`${songIndex}`].innerText =
      "02:" + (Math.round(audioElement.currentTime) -120);
      console.log("120 se bda");
    }
  }, 1000);
  setTimeout(() => {
    if (
      Math.round(audioElement.currentTime) >= 180 &&
      Math.round(audioElement.currentTime) < 240
    ) {
      document.getElementsByClassName("timestampBottom")[0].innerHTML =
      "03:" + (Math.round(audioElement.currentTime) - 180);
      document.getElementsByClassName("timestamp")[`${songIndex}`].innerText =
      "03:" + (Math.round(audioElement.currentTime)-180);
      console.log("180 se bda");
    }
  }, 1000);
  setTimeout(() => {
    if (
      Math.round(audioElement.currentTime) >= 240 &&
      Math.round(audioElement.currentTime) < 300
    ) {
      document.getElementsByClassName("timestampBottom")[0].innerHTML =
      "04:" + (Math.round(audioElement.currentTime) - 240);
      document.getElementsByClassName("timestamp")[`${songIndex}`].innerText =
      "04:" + (Math.round(audioElement.currentTime)-240);
      console.log("240 se bda");
    }
  }, 1000);
  setTimeout(() => {
    if (
      Math.round(audioElement.currentTime) >= 300 &&
      Math.round(audioElement.currentTime) < 360
    ) {
      document.getElementsByClassName("timestampBottom")[0].innerHTML =
      "05:" + (Math.round(audioElement.currentTime) - 300);
      document.getElementsByClassName("timestamp")[`${songIndex}`].innerText =
      "05:" + (Math.round(audioElement.currentTime)-300);
      console.log("300 se bda");
    }
  }, 1000);
  setTimeout(() => {
    if (
      Math.round(audioElement.currentTime) >= 360 &&
      Math.round(audioElement.currentTime) < 420
    ) {
      document.getElementsByClassName("timestampBottom")[0].innerHTML =
      "06:" + (Math.round(audioElement.currentTime) - 360);
      document.getElementsByClassName("timestamp")[`${songIndex}`].innerText =
      "06:" + (Math.round(audioElement.currentTime)-360);
      console.log("360 se bda");
    }
  }, 1000);
});

var makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause");
      element.classList.add("fa-play");
    }
  );
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      if (audioElement.paused || audioElement.currentTime < -0) {
        console.log("eplay");
        gif.style.opacity = 1;
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        // audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.src = songs[songIndex - 1].filePath;
        masterSongName.innerText = songs[songIndex - 1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
      } else {
        audioElement.pause();
        console.log("epause");
        gif.style.opacity = 0;
        songIndex = parseInt(e.target.id);
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        // e.classList.remove("fa-pause");
        // e.classList.add("fa-play");
        // audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.src = songs[songIndex - 1].filePath;
        masterSongName.innerText = songs[songIndex - 1].songName;
        audioElement.currentTime = 0;
      }
    });
  }
);

document.getElementById("forward").addEventListener("click", () => {
  console.log("frwd");
  if (songIndex > 9) {
    songIndex = 0;
  } else songIndex += 1;
  // audioElement.src = `songs/${songIndex}.mp3`;
  audioElement.src = songs[songIndex ].filePath;
  masterSongName.innerText = songs[songIndex ].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
  document.getElementsByClassName("timestamp")[`${songIndex -1}`].innerText =""
});

document.getElementById("backward").addEventListener("click", () => {
  console.log("bkwd");
  if (songIndex < 0) {
    songIndex = 9;
  } else songIndex -= 1;
  // audioElement.src = `songs/${songIndex}.mp3`;
  audioElement.src = songs[songIndex].filePath;
  audioElement.currentTime = 0;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
  document.getElementsByClassName("timestamp")[`${songIndex + 1 }`].innerText = ""
});

