import {
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ChildProcess } from 'child_process';

type Props = {
  value: string;
  children: React.ReactNode;
  title: string;
};

const AccordionEntry: React.FC<Props> = ({ children, value, title }) => {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className='uppercase px-4'>{title}</AccordionTrigger>
      <AccordionContent className='p-4'>{children}</AccordionContent>
    </AccordionItem>
  );
};
export default AccordionEntry;
