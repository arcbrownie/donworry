import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, AlertTriangle, XCircle, RotateCcw } from "lucide-react";

interface QuizQuestion {
  id: number;
  question: string;
  options: { label: string; score: number }[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "현재 월 소득 대비 채무 상환액 비율은?",
    options: [
      { label: "30% 미만 (여유있음)", score: 0 },
      { label: "30~50% (부담됨)", score: 1 },
      { label: "50% 이상 (힘듦)", score: 2 },
      { label: "소득보다 많음", score: 3 },
    ],
  },
  {
    id: 2,
    question: "최근 3개월간 연체 경험이 있나요?",
    options: [
      { label: "없음", score: 0 },
      { label: "1~2회", score: 1 },
      { label: "3회 이상", score: 2 },
      { label: "현재 연체 중", score: 3 },
    ],
  },
  {
    id: 3,
    question: "새로운 대출로 기존 대출을 갚은 적이 있나요?",
    options: [
      { label: "없음", score: 0 },
      { label: "1~2번 있음", score: 1 },
      { label: "자주 그렇다", score: 2 },
      { label: "대출 불가 상태", score: 3 },
    ],
  },
];

type QuizStatus = "ready" | "inProgress" | "complete";

export function DebtHealthQuiz() {
  const [status, setStatus] = useState<QuizStatus>("ready");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleStart = () => {
    setStatus("inProgress");
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedOption(null);
  };

  const handleSelectOption = (score: number, index: number) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (selectedOption === null) return;
    
    const score = quizQuestions[currentQuestion].options[selectedOption].score;
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStatus("complete");
    }
  };

  const getTotalScore = () => answers.reduce((a, b) => a + b, 0);

  const getResult = () => {
    const score = getTotalScore();
    if (score <= 2) {
      return {
        level: "양호",
        emoji: "💚",
        icon: CheckCircle2,
        color: "text-success",
        bgColor: "bg-success/10",
        borderColor: "border-success/30",
        message: "현재 채무 상태가 양호합니다. 현재 상환 계획을 꾸준히 유지하세요!",
        recommendation: "지속적인 재무 관리와 비상금 마련을 추천드려요.",
      };
    } else if (score <= 5) {
      return {
        level: "주의",
        emoji: "💛",
        icon: AlertTriangle,
        color: "text-warning",
        bgColor: "bg-warning/10",
        borderColor: "border-warning/30",
        message: "채무 부담이 증가하고 있어요. 조기 대응이 필요합니다.",
        recommendation: "신속채무조정 또는 채무 통합을 검토해보세요.",
      };
    } else {
      return {
        level: "위험",
        emoji: "❤️",
        icon: XCircle,
        color: "text-destructive",
        bgColor: "bg-destructive/10",
        borderColor: "border-destructive/30",
        message: "전문적인 채무조정이 필요한 상태입니다.",
        recommendation: "개인회생 또는 파산 절차를 검토해보시기 바랍니다.",
      };
    }
  };

  if (status === "ready") {
    return (
      <div className="therapy-card text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
          <span>⚡</span>
          <span>30초 완료</span>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">
          채무 건강 진단 퀴즈
        </h3>
        <p className="text-muted-foreground mb-6">
          3가지 질문으로 나의 채무 상태를 빠르게 체크해보세요
        </p>
        <Button onClick={handleStart} className="gradient-button px-8 py-6 text-lg rounded-xl">
          진단 시작하기
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    );
  }

  if (status === "complete") {
    const result = getResult();
    const Icon = result.icon;

    return (
      <div className={`therapy-card border-2 ${result.borderColor}`}>
        <div className="text-center mb-6">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${result.bgColor} mb-4`}>
            <Icon className={`w-8 h-8 ${result.color}`} />
          </div>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl">{result.emoji}</span>
            <h3 className={`text-2xl font-bold ${result.color}`}>
              채무 건강 상태: {result.level}
            </h3>
          </div>
          <p className="text-muted-foreground">
            {result.message}
          </p>
        </div>

        <div className={`p-4 rounded-xl ${result.bgColor} mb-6`}>
          <p className="text-sm font-medium text-foreground">
            💡 권장 조치: {result.recommendation}
          </p>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" onClick={handleStart} className="flex-1">
            <RotateCcw className="w-4 h-4 mr-2" />
            다시 진단
          </Button>
          <Button asChild className="flex-1 gradient-button">
            <a href="/debt/test">
              상세 진단 받기
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    );
  }

  // In Progress
  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="therapy-card">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
          <span>질문 {currentQuestion + 1} / {quizQuestions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h3 className="text-lg font-semibold text-foreground mb-6">
        {question.question}
      </h3>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelectOption(option.score, index)}
            className={`quiz-option ${selectedOption === index ? "selected" : ""}`}
          >
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
              selectedOption === index 
                ? "border-primary bg-primary" 
                : "border-muted-foreground/30"
            }`}>
              {selectedOption === index && (
                <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
              )}
            </div>
            <span className="font-medium text-foreground">{option.label}</span>
          </button>
        ))}
      </div>

      {/* Next Button */}
      <Button 
        onClick={handleNext} 
        disabled={selectedOption === null}
        className="w-full gradient-button py-6 text-base rounded-xl"
      >
        {currentQuestion < quizQuestions.length - 1 ? "다음 질문" : "결과 보기"}
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </div>
  );
}