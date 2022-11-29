var Instagram = document.querySelector('.Instagram');
var hidden = document.querySelector('.hidden');
var type = document.querySelector('.type');

function Direct() {
  if (Instagram.value != "") {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2b929025ddmshd3302ab633a818cp1ab4cdjsne14ca95e2a8d',
        'X-RapidAPI-Host': 'instagram-downloader-download-instagram-videos-stories.p.rapidapi.com'
      }
    };
    var url = 'https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index?url=' + Instagram.value;
    fetch(url, options).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      hidden.classList.add('active');
      document.querySelector('.form-control').value = data.media;
      document.querySelector('.type').value = data.Type;
      switch (type.value) {
        case "Post-Video":
          document.querySelector('.ext').value = "mp4";
          break;
        case "Story-Video":
          document.querySelector('.ext').value = "mp4";
          break;
        case "Post-Image":
          document.querySelector('.ext').value = "jpg";
          break;
        case "Story-Image":
          document.querySelector('.ext').value = "jpg";
          break;
      }
    }).catch(err => console.error(err));
  }
  else {
    alert('Enter Your Instagram Url');
  }
}

var url = document.querySelector('.form-control');
var ext = document.querySelector('.ext');

function download() {
  const anchor = document.createElement("a");
  anchor.href = url.value;
  anchor.download = 'MWC.' + ext.value;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}
