
 document.querySelector('.open-img').addEventListener('click', function () {
    document.querySelector('#mobile-menu2').style.display = 'block';
    document.querySelector('.close-img').style.display = 'block';
    this.style.display = 'none';
    });
    
    document.querySelector('.close-img').addEventListener('click', function () {
    document.querySelector('#mobile-menu2').style.display = 'none';
    document.querySelector('.open-img').style.display = 'block';
    this.style.display = 'none';
    });