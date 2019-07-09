function increase() {
    var yogaVideo = document.getElementsByClassName("Yoga-Video-Played"),
    aerobicsVideo = document.getElementsByClassName("Aerobics-Video-Played"),
    pilatiesVideo = document.getElementsByClassName("Pilaties-Video-Played"),
    boxingVideo = document.getElementsByClassName("Boxing-Video-Played");

    var yogaVidStat = yogaVideo[2].innerHTML.split(' ')[0]*1;
    yogaVideo[2].innerHTML = `${yogaVidStat+1} times`;
    
    var aerobicsVidStat = aerobicsVideo[2].innerHTML.split(' ')[0]*1;
    aerobicsVideo[2].innerHTML = `${aerobicsVidStat+1} times`;

    var pilatiesVidStat = pilatiesVideo[2].innerHTML.split(' ')[0]*1;
    pilatiesVideo[2].innerHTML = `${pilatiesVidStat+1} times`;

    var boxingVidStat = boxingVideo[2].innerHTML.split(' ')[0]*1;
    boxingVideo[2].innerHTML = `${boxingVidStat+1} times`;
}