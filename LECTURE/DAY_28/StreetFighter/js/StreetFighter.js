/*! StreetFighter.js © yamoo9.net, 2017 */

(function(global){
  'use strict';
  // 멈춤 키
  var esc = 27;

  // 사운드 제어
  global.bgm = document.createElement('audio');
  bgm.setAttribute('src', './bgm/Street-Fighter-v5__Ryu-Theme.mp3');
  bgm.oncanplay = function() {
    // this.play();
  };
  global.document.addEventListener('keyup', function(e) {
    if ( e.keyCode === esc ) {
      bgm.pause();
    }
  });
})(window);

(function(global, Vue, bgm){
  'use strict';

  var stages = ['ryu', 'factory', 'palace', 'air'];
	var players = ['Bison', 'Chun-li', 'Ken', 'Ryu'];
	var buttons = ['attack', 'special attack', 'heal', 'give up']

  function choiceStage(v) {
    // 전달 인자가 있으면 해당 번호의 스테이지 이름을 반환
    if ( v && stages[v] ) { return stages[v]; }
    // 전달 인자가 없으면, 랜덤 스테이지 이름을 반환
    else { return stages[randomNumber(stages.length)] }
  }

	function choicePlayer(v) {
		if ( v && players[v] ) { return player[v]; }
		else { return players[randomNumber(players.length)] }
	}

  function randomNumber(max) {
    return Math.floor( Math.random() * max );
  }

	function damage(min, max) {
		return Math.max(randomNumber(max), (min));
	}

  // 스트리트 파이터에 사용되는 상태 데이터 속성
  // 스테이지
  // ryu, factory, palace, air
  var model = {
    stageClass: null,
		winner: null,
    is_started: false,
		is_finished: false,
		setting: {
			logo: { src: 'images/Logo/sfv-logo.png', alt:'Street Fighter' },
			message: 'Game Start!'
		},
		players: [
			{
				name: choicePlayer(),
				HP: 100,
				src: './images/Chracter/'+ players[0] +'.png',
				style: {
					animation: 'infinite-scale 2.4s infinite alternate'
				}
			},
			{
				name: choicePlayer(),
				HP: 100,
				src: './images/Chracter/'+ players[1] +'.png',
				style: {
					animation: 'infinite-scale 2.4s infinite alternate'
				}
			}
		],
		buttons: ['attack', 'special attack', 'heal', 'give up']
  };

  // 뷰 인스턴스 생성
  global.vm = new Vue({
    // 마운트
    el: '#StreetFighter',
    // 모델 연결
    data: model,
    // 생성된 시점에 음원 재생
    created: function() {
      bgm.play();
    },
    // 마운트 된 시점에 스테이지 배경 설정
    mounted: function() {
      this.choiceStage();
			console.log(this.$refs.gameLogo);
    },
    // 인스턴스 메서드
    methods: {
      choiceStage: function(v) {
        this.stageClass = 'stage-' + choiceStage(v);
      },
			gameStart: function() {
				this.is_started = true;
			},
			playerSrc: function(name) {
        return './images/Chracter/'+ name +'.png'
    	},
			action: function(button) {
				switch(button) {
					case this.buttons[0]:
						this.attack();
					break;
					case this.buttons[1]:
						this.specialAttack();
					break;
					case this.buttons[2]:
						this.heal();
					break;
					case this.buttons[3]:
						this.giveUp();
				}
			},
			attack: function() {
				this.player1.HP -= damage(1, 7);
				this.player2.HP -= damage(5, 10);
				this.checkGameWinner();
			},
			specialAttack: function() {
				this.player1.HP -= damage(1, 3);
				this.player2.HP -= damage(10, 27);
				this.checkGameWinner();
			},
			heal: function() {
				var hp = this.player2.HP;
				if ( hp < 100 ) {
					this.player2.HP += 5;
				} else {
					this.player2.HP = 100;
				}
				
			},
			giveUp: function() {
				this.is_started = false;
				this.reGameStart();
			},
			gameOver: function() {
				this.is_finished = true;
			},
			reGameStart: function() {
				this.is_started = false;
				this.player1.HP = 100;
				this.player2.HP = 100;
			},
			checkGameWinner: function() {
				var loser = null, is_finished = false;
				if ( this.player1.HP < 0 ) {
					loser = this.player1;
					this.winner = this.player2.name;
					is_finished = true;
				} 
				if ( this.player2.HP < 0 ) {
					loser = this.player2;
					this.winner = this.player1.name;
					is_finished = true;
				} 
				if ( is_finished ) {
					loser.HP = 0;
					this.gameOver();
				}
			}
		},
		computed: {
			player1: function() {
				return this.players[0];
			},
			player2: function() {
				return this.players[1];
			}
		}
  });

})(window, window.Vue, window.bgm);