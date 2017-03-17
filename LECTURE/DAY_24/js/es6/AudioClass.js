

class AudioClass {
    // constructor
    constructor(options) {
        this.media = null;
        return this.init(options);
    }
    // static methods
    static getReadableTime(seconds) {
        let min, sec;
        seconds = Math.floor( seconds );
        min = Math.floor( seconds / 60 );
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor( seconds % 60 );
        sec = sec >= 10 ? sec : '0' + sec;
        return min + ':' + sec;
    }
    static validate(condition, error_message) {
        if ( condition ) { throw new Error(error_message); }
    }
    static isAudioObject(data) {
        return data && data.constructor === HTMLAudioElement;
    }
    static hasSign(word, sign) {
        return word.indexOf(sign) > -1;
    }
    static getCurrentRotation(el) {
        AudioClass.validate(el.nodeType !== 1, '요소노드를 전달해야 합니다.');
        let transform_style = global.getComputedStyle(el).transform;
        console.log(transform_style);
        let values, a, b, c, d, radians, angle;
        if ( transform_style && transform_style !== 'none' ) {
            values = transform_style.split('(')[1];
            values = values.split(')')[0];
            values = values.split(',');
            a = values[0];
            b = values[1];
            c = values[2];
            d = values[3];
            radians = Math.atan2(b, a);
            if ( radians < 0 ) {
                radians += (2 * Math.PI);
            }
        angle = Math.round( radians * (180/Math.PI));
        } else {
        angle = 0;
        }
        return angle;
    }
    // instance methods
    init(options) {
        // 옵션 덮어쓰기
        var options = this.options = Object.assign(AudioClass.defaults, options);
        // 생성 이전 시점
        if( typeof options.beforeCreate === 'function' ) { options.beforeCreate.call(this); }
        // 음원 생성
        this.media = this.create();
        // 업데이트 시점
        if( typeof options.update === 'function' ) { this.update(options.update); }
        // AudioCtrl {} 객체 반환
        return this;
    }
    create() {
        var _this = this;
        // 생성
        var audio = document.createElement('audio');
        // 옵션 변수
        var options = this.options;
        // 경로 변수
        var source = options.src;
        // 검사
        AudioCtrl.validate(typeof source !== 'string' || !source.trim(), '전달된 음원 경로는 문자열이 아니거나, 공백 문자입니다.');
        // 설정
        audio.setAttribute('src', source);
        // 생성/재생 가능 이후 시점
        audio.oncanplay = function() {
        if( typeof options.created === 'function' ) { options.created.call(_this, audio); }
        }
        // audio 객체 반환
        return audio;
    }

}