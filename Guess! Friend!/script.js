    const questions = [
        // 你之前的问题
        {
            question: "河南人都是？",
            options: {A: "人", B: "神", C: "河南人", D: "我不知道啊！"},
            answer: {A: null, B: "李猛", C: null, D: null}
        },
        {
            question: "我是第几号机器人(铁甲小宝)?",
            options: {A: "A型1号", B: "B型9号", C: "C型26号", D: "我不知道啊！"},
            answer: {A: null, B: "李猛", C: null, D: null}
        },
        {
            question: "什么是ssThresh hold?",
            options: {A: "TCP Congestion Control", B: "蝎子莱莱", C: "我不会", D: "我不知道啊！"},
            answer: {A: null, B: "李猛", C: null, D: null}
        },
        {
            question: "一( )窝里( )!",
            options: {A: "直，斗", B: "个我，不知道", C: "Gay,Giao", D: "我不知道啊！"},
            answer: {A: null, B: null, C: "娅妮", D: null}
        },
        {
            question: "我是你的？",
            options: {A: "二哥", B: "神", C: "大哥", D: "我不知道啊！"},
            answer: {A: null, B: "李猛", C: null, D: null}
        },
        {
            question: "我家住几楼？",
            options: {A: "5楼", B: "1楼", C: "11楼", D: "我不知道啊！"},
            answer: {A: "周延巽", B: null, C: null, D: null}
        },
        {
            question: "我高中时最喜欢的体育明星是谁？",
            options: {A: "科比", B: "詹姆斯", C: "樱木花道", D: "我不知道啊！"},
            answer: {A: null, B: null, C: "娅妮", D: null}
        },
        {
            question: "摸脚，抹角，魔教 (     ) !",
            options: {A: "模脚", B: "GIAO!", C: "SPY/侦探", D: "我不知道啊！"},
            answer: {A: null, B: "娅妮", C: null, D: null}
        },

        // 新增的问题
        {
            question: "我的第一部视频作品的名字叫？",
            options: {A: "电光醋溜炮！", B: "是谁拐走了我的孩子", C: "甜不辣", D: "我不知道啊！"},
            answer: {A: "周延巽", B: "小生命", C: null, D: null}
        },
        {
            question: "我在初中的外号是什么？",
            options: {A: "shark！", B: "旋风霸王", C: "雷霆神", D: "我不知道啊！"},
            answer: {A: "小生命", B: null, C: null, D: null}
        },
        {
            question: "牛逼的英文是什么？",
            options: {A: "COW PUSSY", B: "new bee", C: "T", D: "我不知道啊！"},
            answer: {A: null, B: null, C: "小生命", D: null}
        },
        {
            question: "我初中每天连着修两节的AP课程是什么？",
            options: {A: "AP Chinese", B: "AP Gym", C: "AP US History", D: "我不知道啊！"},
            answer: {A: null, B: "松洺", C: null, D: null}
        },
        {
            question: "我更喜欢投篮还是上篮？",
            options: {A: "投篮", B: "上篮", C: "篮子", D: "我不知道啊！"},
            answer: {A: null, B: "松洺", C: null, D: null}
        },
        {
            question: "我们有篮球组合技吗？",
            options: {A: "有", B: "没有", C: "有没有", D: "我不知道啊！"},
            answer: {A: "松洺", B: null, C: null, D: null}
        },
        {
            question: "从下列，选出，正确的外号",
            options: {A: "三井寿", B: "皇家程序员", C: "妮子", D: "我不知道啊！"},
            answer: {A: "松洺", B: "小生命", C: "娅妮", D: null}
        },
        {
            question: "什么是一个“典中典”？",
            options: {A: "关灯玩恐怖游戏", B: "上课玩Minecraft", C: "All Gender", D: "我不知道啊！"},
            answer: {A: "松洺", B: "小生命", C: "李猛", D: null}
        },
    ];


    let currentQuestionIndex = 0;
    let scores = {"李猛": 0, "娅妮": 0, "周延巽": 0, "小生命": 0, "松洺": 0};

    document.getElementById("startButton").addEventListener("click", function() {
        this.style.display = "none";
        shuffleQuestions(questions);
        document.getElementById("quiz").style.display = "block";
        showQuestion();
    });

    document.getElementById("D").addEventListener("click", function(event) {
        event.stopPropagation(); // 阻止事件冒泡
        moveButtonRandomly(this);
    });

    function moveButtonRandomly(button) {
        var x = Math.random() * (window.innerWidth - button.clientWidth);
        var y = Math.random() * (window.innerHeight - button.clientHeight);
        button.style.position = 'absolute';
        button.style.left = x + 'px';
        button.style.top = y + 'px';
    }

    document.querySelectorAll(".option").forEach(button => {
        button.addEventListener("click", function(event) {
            if (this.id === 'D') {
                event.stopPropagation(); // 阻止事件冒泡
                moveButtonRandomly(this);
                return; // 不继续执行其余代码
            }
    
            let selectedOption = this.id;
            updateScore(selectedOption);
            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                showQuestion();
            } else {
                showResult();
            }
        });
    });
    
    function moveButtonRandomly(button) {
        var x = Math.random() * (window.innerWidth - button.clientWidth);
        var y = Math.random() * (window.innerHeight - button.clientHeight);
        button.style.position = 'absolute';
        button.style.left = x + 'px';
        button.style.top = y + 'px';
    }
    

    function shuffleQuestions(questionsArray) {
        for (let i = questionsArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [questionsArray[i], questionsArray[j]] = [questionsArray[j], questionsArray[i]];
        }
    }

    function showQuestion() {
        let question = questions[currentQuestionIndex];
        document.getElementById("question").innerText = question.question;
        document.getElementById("A").innerText = question.options.A;
        document.getElementById("B").innerText = question.options.B;
        document.getElementById("C").innerText = question.options.C;
        document.getElementById("D").innerText = question.options.D; // 新增
    }

    document.querySelectorAll(".option").forEach(button => {
        button.addEventListener("click", function() {
            let selectedOption = this.id;
            updateScore(selectedOption);
            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                showQuestion();
            } else {
                showResult();
            }
        });
    });

    function updateScore(selectedOption) {
        let question = questions[currentQuestionIndex];
        let selectedFriend = question.answer[selectedOption];
        if (selectedFriend) {
            scores[selectedFriend]++;
        }
    }

    function showResult() {
        document.getElementById("quiz").style.display = "none";
        let resultText = "我猜你是：";
        let maxScore = Math.max(...Object.values(scores));
        let friend = Object.keys(scores).find(key => scores[key] === maxScore);
        resultText += friend;
        document.getElementById("result").innerText = resultText;
        document.getElementById("result").style.display = "block";
    }