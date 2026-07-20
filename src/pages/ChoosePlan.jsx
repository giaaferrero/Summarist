import { useState } from "react";
import "./ChoosePlan.css";

const ChoosePlan = () => {
  const [selectedPlan, setSelectedPlan] = useState("yearly");
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (questionNumber) => {
    setOpenQuestion(
      openQuestion === questionNumber ? null : questionNumber
    );
  };

  return (
    <div className="plan">
      <div className="plan__wrapper">
        <h1 className="plan__title">
          Get unlimited access to many amazing books to read
        </h1>

        <h2 className="plan__subtitle">
          Turn ordinary moments into amazing learning opportunities
        </h2>

        <div className="plan__options">
          <button
            type="button"
            className={`plan__option ${
              selectedPlan === "yearly" ? "plan__option--active" : ""
            }`}
            onClick={() => setSelectedPlan("yearly")}
          >
            <div className="plan__option--radio">
              <div className="plan__option--radio-circle" />
            </div>

            <div className="plan__option--content">
              <h3>Premium Plus Yearly</h3>
              <p>$99.99/year</p>
              <p>7-day free trial included</p>
            </div>

            <div className="plan__option--badge">MOST POPULAR</div>
          </button>

          <div className="plan__separator">
            <span>or</span>
          </div>

          <button
            type="button"
            className={`plan__option ${
              selectedPlan === "monthly" ? "plan__option--active" : ""
            }`}
            onClick={() => setSelectedPlan("monthly")}
          >
            <div className="plan__option--radio">
              <div className="plan__option--radio-circle" />
            </div>

            <div className="plan__option--content">
              <h3>Premium Monthly</h3>
              <p>$9.99/month</p>
              <p>No free trial</p>
            </div>
          </button>
        </div>

        <button
          type="button"
          className="plan__button"
          onClick={() => console.log("Selected plan:", selectedPlan)}
        >
          {selectedPlan === "yearly"
            ? "Start your free trial"
            : "Subscribe now"}
        </button>

        <p className="plan__disclaimer">
          {selectedPlan === "yearly"
            ? "Cancel your trial at any time before it ends, and you won’t be charged."
            : "Your monthly subscription will renew automatically."}
        </p>

        <div className="plan__faq">
          <h2 className="plan__faq--title">Frequently Asked Questions</h2>

          <div className="plan__faq--item">
            <button
              type="button"
              className="plan__faq--question"
              onClick={() => toggleQuestion(1)}
            >
              <span>How does the free trial work?</span>
              <span>{openQuestion === 1 ? "−" : "+"}</span>
            </button>

            {openQuestion === 1 && (
              <p className="plan__faq--answer">
                You can use Summarist Premium for seven days without being
                charged. Cancel before the trial ends to avoid payment.
              </p>
            )}
          </div>

          <div className="plan__faq--item">
            <button
              type="button"
              className="plan__faq--question"
              onClick={() => toggleQuestion(2)}
            >
              <span>Can I cancel my subscription?</span>
              <span>{openQuestion === 2 ? "−" : "+"}</span>
            </button>

            {openQuestion === 2 && (
              <p className="plan__faq--answer">
                Yes. You can cancel your subscription at any time through your
                account settings.
              </p>
            )}
          </div>

          <div className="plan__faq--item">
            <button
              type="button"
              className="plan__faq--question"
              onClick={() => toggleQuestion(3)}
            >
              <span>Which plan should I choose?</span>
              <span>{openQuestion === 3 ? "−" : "+"}</span>
            </button>

            {openQuestion === 3 && (
              <p className="plan__faq--answer">
                The yearly plan includes a seven-day free trial and offers the
                best value. The monthly plan gives you more flexibility.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosePlan;