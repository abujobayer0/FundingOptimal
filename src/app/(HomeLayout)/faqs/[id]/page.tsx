import React from "react";
import FaqsDetails from "../../_components/module/FAQsDetails/FAQsDetails";

interface TFaqsDetailsPAgeProps {
  params: { id: string };
}

const FaqsDetailsPage = async ({ params }: TFaqsDetailsPAgeProps) => {
  return (
    <div>
      <FaqsDetails id={params?.id} />
    </div>
  );
};

export default FaqsDetailsPage;
