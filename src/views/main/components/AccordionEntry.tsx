import {
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ChildProcess } from 'child_process';
import { FactoryIcon } from 'lucide-react';

type Props = {
  value: string;
  children: React.ReactNode;
  title: string;
  icon: React.ReactNode;
};

const AccordionEntry: React.FC<Props> = ({ children, value, title, icon }) => {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className='uppercase px-4'>
        <div className='flex gap-2'>
          {icon}
          <span>{title}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className='p-4'>{children}</AccordionContent>
    </AccordionItem>
  );
};
export default AccordionEntry;
