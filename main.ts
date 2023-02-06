let start = false;
let done = false;
let avg = 0;

function prumer(x: number) {
    const VAHA = 3;
    avg -= avg / VAHA;
    avg += x;

    return (avg / VAHA);
}


basic.forever(function () {
    radio.setGroup(1)
    radio.setFrequencyBand(20)
    radio.setTransmitPower(5)
    console.logValue("light level", input.lightLevel())
    console.log("\n\r")
    while (1) {
        if (done === true)
            continue;

        if (start === false)
            continue;

        let light = prumer(input.lightLevel());

        if (light < 100) {
            radio.sendNumber(1);
            done = true;
        }
    }
})

input.onButtonPressed(Button.A, function () {
    music.playTone(Note.A, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(Note.C, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(Note.D, music.beat(BeatFraction.Whole))
    start = true;
})

input.onButtonPressed(Button.B, function () {
    done = false;
})


/////////////

let start_time = 0;
let avg = 0;

function prumer(x: number) {
    const VAHA = 3;

    avg -= avg / VAHA;
    avg += x;

    return (avg / VAHA);
}

function main() {
    while (true) {
        let light = prumer(input.lightLevel());

        if (light > 50)
            continue;

        if (start_time == 0)
            continue;

        let stop_time = control.millis();
        console.log("cas " + (stop_time - start_time) / 1000 + " sekund");
        start_time = 0;
    }
}

basic.forever(function () {
    main();
})

radio.onReceivedValue(function (name: string, value: number) {
    if (value === 1) {
        start_time = control.millis();
    }
})

input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    done = false
    start = false
})