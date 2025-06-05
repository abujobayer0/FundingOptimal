export type TFaq = {
  id: string;
  category: string;
  title: string;
  description: string;
  image?: string;
  questions: {
    ques: string;
    userIds: string[];
    status: boolean;
  }[];
};
