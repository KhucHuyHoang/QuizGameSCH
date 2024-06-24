window.addEventListener("load", () => {
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.timeline({
        scrollTrigger: {
            trigger: ".wrapper",
            start: "top top",
            end: "+=150%",
            pin: true,
            scrub: true,
            markers: false
        }
    })
    .to(".image-container img", {
        scale: 2,
        z: 250,
        transformOrigin: "center center",
        ease: "power1.inOut"
    })
    .to(
        ".section.hero",
        {
            scale: 1.4,
            transformOrigin: "center center",
            ease: "power1.inOut"
        },
        "<"
    );
  });
  
  const questions = [
    {
      question: "순천향대는 몇 년도에 설립되었습니까?",
      optionA: "1977년",
      optionB: "1978년",
      optionC: "1979년",
      optionD: "1980년",
      correctOption: "optionB"
    },
  
    {
      question:
        "홍민 교수는 ..... 있는 대학교 덴버 보건과학센터에서 박사학위를 받았습니다",
      optionA: "Seoul",
      optionB: "Moscow",
      optionC: "New York",
      optionD: "Colorado",
      correctOption: "optionD"
    },
  
    {
      question:
        "홍민 교수님 사무실 주소가 어디있습니까?",
      optionA: "M509",
      optionB: "m508",
      optionC: "M507",
      optionD: "m506",
      correctOption: "optionA"
    },
  
    {
      question: "CGL 연구소에서 진행 중 프로젝트는 현실감 있는 3D 콘텐츠 개발을 위한 딥러닝 기반 시뮬레이션 특성값 예측 연구를 언제부터인가?",
      optionA: "2022.04",
      optionB: "2022.05",
      optionC: "2022.06",
      optionD: "2022.07",
      correctOption: "optionC"
    },
  
    {
      question:
        "컴퓨터소프트웨어공학과는 몇 년도에 설립되었습니까?",
      optionA: "1982년",
      optionB: "1983년",
      optionC: "1984년",
      optionD: "1985년",
      correctOption: "optionB"
    },
  
    {
      question: "다음 중 순천향대학교에서 교육을 받지 못한 전공은 ..... ?",
      optionA: "의학",
      optionB: "기술",
      optionC: "농업",
      optionD: "사회과학",
      correctOption: "optionC"
    },
  
    {
      question:
        "컴퓨터 소프트웨어 공학과에세 무슨 나무 있습니까?",
      optionA: "선인장",
      optionB: "야자수",
      optionC: "단풍나무",
      optionD: "벚나무",
      correctOption: "optionD"
    },
  
    {
      question:
        "성낙준 박사는 이번 학기에 어떤 과목을 가르치지 않았습니까?",
      optionA: "자바프로그래밍",
      optionB: "파이썬프로그래밍",
      optionC: "웹프로그래밍",
      optionD: "인공지능",
      correctOption: "optionD"
    },
  
    {
      question: "JavaScript에서 배열의 길이를 반환하는 속성은 무엇입니까?",
      optionA: "size",
      optionB: "length",
      optionC: "count",
      optionD: "index",
      correctOption: "optionB"
    },
    
    {
      question: "HTTP 상태 코드 404는 무엇을 의미합니까?",
      optionA: "요청이 성공적으로 처리됨",
      optionB: "서버 오류 발생",
      optionC: "요청된 페이지를 찾을 수 없음",
      optionD: "권한 없음",
      correctOption: "optionC"
    },
  
    {
      question: "React에서 상태(state)를 설정하는 메서드는 무엇입니까?",
      optionA: "setStatus",
      optionB: "setState",
      optionC: "setCondition",
      optionD: "setContext",
      correctOption: "optionB"
    },
    
    {
      question: "CSS에서 요소의 배경색을 지정하는 속성은 무엇입니까?",
      optionA: "color",
      optionB: "background-color",
      optionC: "font-color",
      optionD: "border-color",
      correctOption: "optionB"
    },
  
    {
      question:
        "JavaScript에서 함수 표현식을 정의할 때 사용하는 키워드는 무엇입니까?",
      optionA: "def",
      optionB: "function",
      optionC: "lambda",
      optionD: "fun",
      correctOption: "optionB"
    },
    
    {
      question:
        "순천향대학교의 공식 마스코트는 무엇입니까?",
      optionA: "불사조",
      optionB: "호랑이",
      optionC: "사자",
      optionD: "곰",
      correctOption: "optionA"
    },
    
  ];  
  let shuffledQuestions = []; // 모든 사용 가능한 질문 중 무작위로 선택된 질문을 저장할 빈 배열
  
  function handleQuestions() {
    // 무작위로 선택된 10개의 질문을 shuffledQuestions 배열에 추가하는 함수
    // 앱은 세션당 10개의 질문을 다룰 것입니다.
    while (shuffledQuestions.length <= 9) {
      const random = questions[Math.floor(Math.random() * questions.length)];
      if (!shuffledQuestions.includes(random)) {
        shuffledQuestions.push(random);
      }
    }
  }
  
  let questionNumber = 1; // 현재 질문 번호를 저장합니다.
  let playerScore = 0; // 플레이어의 점수를 저장합니다.
  let wrongAttempt = 0; // 플레이어가 선택한 잘못된 답변의 수를 저장합니다.
  let indexNumber = 0; // 다음 질문을 표시하는 데 사용됩니다.
  
  // 배열의 다음 질문을 DOM에 표시하는 함수
  // 또한 플레이어와 퀴즈 정보를 DOM에 표시합니다.
  function NextQuestion(index) {
    handleQuestions();
    const currentQuestion = shuffledQuestions[index];
    document.getElementById("question-number").innerHTML = questionNumber;
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("display-question").innerHTML =
      currentQuestion.question;
    document.getElementById("option-one-label").innerHTML =
      currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML =
      currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML =
      currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML =
      currentQuestion.optionD;
  }
  
  function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber]; // 현재 질문을 가져옵니다.
    const currentQuestionAnswer = currentQuestion.correctOption; // 현재 질문의 답을 가져옵니다.
    const options = document.getElementsByName("option"); // 'option'이라는 이름을 가진 모든 요소를 DOM에서 가져옵니다. (이 경우에는 라디오 입력)
    let correctOption = null;
  
    options.forEach((option) => {
      if (option.value === currentQuestionAnswer) {
        // 올바른 답을 가진 라디오 입력을 가져옵니다.
        correctOption = option.labels[0].id;
      }
    });
  
    // 라디오 입력이 선택되었는지 확인하는 부분
    if (
      options[0].checked === false &&
      options[1].checked === false &&
      options[2].checked === false &&
      options[3].checked == false
    ) {
      document.getElementById("option-modal").style.display = "flex";
    }
  
    // 선택된 라디오 버튼이 답과 같은지 확인하는 부분
    options.forEach((option) => {
      if (option.checked === true && option.value === currentQuestionAnswer) {
        document.getElementById(correctOption).style.backgroundColor = "green";
        playerScore++; // 플레이어의 점수를 추가합니다.
        indexNumber++; // 인덱스에 1을 더하여 다음 질문을 표시합니다.
        // 다음 질문이 로드될 때까지 질문 번호를 지연시키기 위해 설정합니다.
        setTimeout(() => {
          questionNumber++;
        }, 1000);
      } else if (option.checked && option.value !== currentQuestionAnswer) {
        const wrongLabelId = option.labels[0].id;
        document.getElementById(wrongLabelId).style.backgroundColor = "red";
        document.getElementById(correctOption).style.backgroundColor = "green";
        wrongAttempt++; // 잘못된 시도를 1 추가합니다.
        indexNumber++;
        // 다음 질문이 로드될 때까지 질문 번호를 지연시키기 위해 설정합니다.
        setTimeout(() => {
          questionNumber++;
        }, 1000);
      }
    });
  }
  
  // 다음 버튼이 호출될 때 호출되는 함수
  function handleNextQuestion() {
    checkForAnswer(); // 플레이어가 올바른 답을 선택했는지 확인합니다.
    unCheckRadioButtons();
    // 다음 질문을 표시하는 것을 1초 지연하여 일부 효과를 위해 설정합니다. 질문이 플레이어에게 갑자기 나타나지 않도록 합니다.
    setTimeout(() => {
      if (indexNumber <= 9) {
        // 인덱스 번호가 9보다 크지 않은 한 다음 질문을 표시합니다. 인덱스 번호는 0부터 시작하므로 인덱스 9는 10번째 질문입니다.
        NextQuestion(indexNumber);
      } else {
        handleEndGame(); // 인덱스 번호가 9보다 크면 게임이 종료됩니다. 이는 이미 10번째 질문이라는 것을 의미합니다.
      }
      resetOptionBackground();
    }, 1000);
  }
  
  // 올바른/잘못된 색을 표시한 후 옵션 배경을 다시 설정합니다.
  function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
      document.getElementById(option.labels[0].id).style.backgroundColor = "";
    });
  }
  
  // 다음 질문을 위해 모든 라디오 버튼의 선택을 해제합니다(맵 또는 foreach 루프를 사용하여 할 수도 있습니다).
  function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
      options[i].checked = false;
    }
  }
  
  // 모든 질문에 답했을 때 호출되는 함수
  function handleEndGame() {
    let remark = null;
    let remarkColor = null;
  
    // 플레이어의 평가와 평가 색상을 위한 조건 확인
    if (playerScore <= 3) {
      remark = "괜찮습니다, 더 열심히 하세요 ~~";
      remarkColor = "red";
    } else if (playerScore >= 4 && playerScore < 8) {
      remark = "당신은 더 잘할 수 있습니다.";
      remarkColor = "orange";
    } else if (playerScore >= 8) {
      remark = "축하합니다, 계속해서 수고하세요.";
      remarkColor = "green";
    }
    const playerGrade = (playerScore / 10) * 100;
      
    // 점수판에 표시할 데이터
    document.getElementById("remarks").innerHTML = remark;
    document.getElementById("remarks").style.color = remarkColor;
    document.getElementById("grade-percentage").innerHTML = playerGrade;
    document.getElementById("wrong-answers").innerHTML = wrongAttempt;
    document.getElementById("right-answers").innerHTML = playerScore;
    document.getElementById("score-modal").style.display = "flex";
  }
  
  // 점수 모달을 닫고 게임을 재설정하며 질문을 다시 섞습니다.
  function closeScoreModal() {
    questionNumber = 1;
    playerScore = 0;
    wrongAttempt = 0;
    indexNumber = 0;
    shuffledQuestions = [];
    NextQuestion(indexNumber);
    document.getElementById("score-modal").style.display = "none";
  }
  
  function  closeOptionModal(){
    document.getElementById("option-modal").style.display = "none"
  }