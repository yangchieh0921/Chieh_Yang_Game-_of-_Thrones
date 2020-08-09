(() => {
  console.log('fired');

  let lightBox = document.querySelector(".lightbox"),
      lbClose = lightBox.querySelector("span"),
      lbVideo = lightBox.querySelector("video"),
      sigils = document.querySelectorAll(".sigilContainer"),
      houseImages = document.querySelector("#houseImages"),
      houseName = document.querySelector(".house-name"),
      houseBio = document.querySelector(".house-info");

      const houseInfo = [
        ["Stark", `House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.`],

        ["Barathon", `House Baratheon of Storm's End is a legally extinct Great House of Westeros. A cadet branch was formerly the royal house, but House Lannister now controls the throne. House Baratheon traditionally ruled the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storm's End.

        House Baratheon became the royal house of the Seven Kingdoms after Robert Baratheon led a rebellion against the Targaryen dynasty. At the end of the rebellion, Robert ascended the Iron Throne as Robert I and married Cersei Lannister after the death of Lyanna Stark.`],

        ["Lannister", `House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties. It is also the current royal house of the Seven Kingdoms following the extinction of House Baratheon of King's Landing, which had been their puppet house anyway.

        The Lannisters rule over the Westerlands. Their seat is Casterly Rock, a massive rocky promontory overlooking the Sunset Sea which has had habitations and fortifications built into it over the millennia. They are the Lords Paramount of the Westerlands and Wardens of the West. As the new royal house, they also rule directly over the Crownlands from their seat of the Red Keep in King's Landing, the traditional seat of the royal family.`],

        ["Tully", `House Tully of Riverrun is an exiled Great House of Westeros. Its most senior member carried the title of Lord of Riverrun and Lord Paramount of the Trident, until the Red Wedding. The current head is Lord Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver trout on a red and blue background. Their house words are "Family, Duty, Honor.`],

        ["Greyjoy", `House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and bleak collection of islands off the west coast of Westeros, from the castle at Pyke. The head of the house is the Lord Reaper of Pyke.

        House Greyjoy's sigil is traditionally a golden kraken on a black field. Their house words are "We Do Not Sow," although the phrase "What Is Dead May Never Die" is also closely associated with House Greyjoy and their bannermen, as they are associated with the faith of the Drowned God.`],

        ["Arryn", `House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the Vale of Arryn for millennia, originally as the Kings of Mountain and Vale and more recently as Lords Paramount of the Vale and Wardens of the East under the Targaryen kings and Baratheon-Lannister kings. The nominal head of House Arryn is Robin Arryn, the Lord of the Eyrie, with his stepfather Petyr Baelish acting as Lord Protector until he reaches the age of `],
      ]

      function showHideLightbox() {
        lightBox.classList.toggle('show-lightbox');

      //try making the video play as well

      //check the play status of the video.
      //if it's paused of not playing, that means just opened the lightBox
      //and we want the video to play
      if (lbVideo.paused) {
        lbVideo.play();
      } else {
      //lightbox is open and we want the video to rewind and stop when we close it.
        lbVideo.currentTime = 0;
        lbVideo.pause();
      }
      // rewind the video and make it pause at currentTime of 0
    }
      //function hideLightbox() {
      //  lightBox.classList.remove('show-lightbox');
      //}
      function animateBanner() {
        //let bannerNum = this.dataset.offset;
        //console.log(bannerNum * 600);
        // move the banner to the right using the data-offset attribute
        // we got from the shields

        // 600 is the width of each image - multiply them together
        houseImages.style.right = `${this.dataset.offset * 600}px`;

        //and also show the house name
        houseName.textContent = `House ${houseInfo[this.dataset.offset][0]}`;
        houseBio.textContent = `House ${houseInfo[this.dataset.offset][1]}`;
        TweenMax.to(houseImages, 0.8, {right: houseImages.style.right}).eventCallback("onComplete", showHideLightbox);
      }


      //sigils.forEach(sigil => sigil.addEventListener("click", showHideLightbox));

      sigils.forEach(sigil => sigil.addEventListener("click", animateBanner));

      lbClose.addEventListener("click", showHideLightbox);

      // add an "end" event headler for the video ->close the lightBox
      lbVideo.addEventListener("ended", showHideLightbox);
})();
