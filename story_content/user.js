function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6OZiD27yXpA":
        Script1();
        break;
      case "6fsR4Gh74Fn":
        Script2();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="1.mp3";
audio.load();
audio.play();
audio.volume = 0.4;
}

function Script2()
{
  var.audio = document.getElementById('bgSong');
audio.src="musik.mp3";
audio.load();
audio.play();
}

