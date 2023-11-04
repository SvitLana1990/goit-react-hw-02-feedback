import { Sections, Title } from './Section.styled';

export const Section = ({ title, children }) => (
  <Sections>
    <Title>{title}</Title>
    {children}
  </Sections>
);
