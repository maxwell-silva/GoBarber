import React from 'react';
import { useAuth } from '../../hooks/auth';
import Button from '../../components/Button';
import { Container, Title } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <Container>
      <Title>Dashboard</Title>
      <Button onPress={signOut}>Sair</Button>
    </Container>
  );
};

export default Dashboard;
