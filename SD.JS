document.querySelector('.change-color').onclick = function() {
    let resumeContainer = document.querySelector('.resumecon');
    let isWhite = resumeContainer.style.backgroundColor === 'white' || resumeContainer.style.backgroundColor === '';
    resumeContainer.style.backgroundColor = isWhite ? 'red' : 'white';
    this.style.backgroundColor = isWhite ? '#000' : '#555';
    this.style.color = isWhite ? 'white' : 'black';
  };
  