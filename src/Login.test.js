import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

test('renderiza título Login', () => {
  render(<Login />);
  expect(screen.getByText(/Login Sistema/i)).toBeInTheDocument();
});

test('renderiza campo de email', () => {
  render(<Login />);
  expect(screen.getByPlaceholderText(/Digite seu email de acesso/i)).toBeInTheDocument();
});

test('renderiza campo de senha', () => {
  render(<Login />);
  expect(screen.getByPlaceholderText(/Digite sua senha/i)).toBeInTheDocument();
});

test('mostra erro com login inválido', () => {
  render(<Login />);
  
  fireEvent.change(screen.getByPlaceholderText(/Digite seu email de acesso/i), {
    target: { value: 'teste@teste.com' }
  });

  fireEvent.change(screen.getByPlaceholderText(/Digite sua senha/i), {
    target: { value: '123' }
  });

  fireEvent.click(screen.getByText(/Acessar/i));

  expect(screen.getByText(/Usuário ou senha incorretos/i)).toBeInTheDocument();
});

test('login com sucesso', () => {
  render(<Login />);
  
  fireEvent.change(screen.getByPlaceholderText(/Digite seu email de acesso/i), {
    target: { value: 'eduardo.lino@pucpr.br' }
  });

  fireEvent.change(screen.getByPlaceholderText(/Digite sua senha/i), {
    target: { value: '123456' }
  });

  fireEvent.click(screen.getByText(/Acessar/i));

  expect(screen.getByText(/Acesso liberado com sucesso!/i)).toBeInTheDocument();
});