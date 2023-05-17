function setup(){
    canvas = createCanvas(400,400)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
}
function draw(){
    image(video,0,0,400,400)
    fill("red")
    stroke("red")
    circle(20,20,64)

    fill("red")
    stroke("red")
    circle(390,20,64)

    fill("red")
    stroke("red")
    circle(20,390,64)

    fill("red")
    stroke("red")
    circle(390,390,64)
}