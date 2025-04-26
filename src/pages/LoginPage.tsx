
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Login realizado",
      description: "Bem-vinda de volta, Maria!",
    });
    
    navigate('/');
  };
  
  const handleGoogleLogin = () => {
    toast({
      title: "Login com Google",
      description: "Processando login com Google...",
    });
    
    // Simulação de login com Google
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-1/3 bg-gradient-app" />
      
      <div className="flex-1 px-6 pt-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 -mt-20">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-heading font-semibold mb-2">Bem-vinda ao Glow Express</h1>
            <p className="text-gray-500">Entre para começar suas compras</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4 mb-6">
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" placeholder="seu.email@exemplo.com" defaultValue="maria.silva@exemplo.com" />
            </div>
            
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" placeholder="••••••••" defaultValue="senha123" />
            </div>
            
            <div className="text-right">
              <a href="#" className="text-sm text-primary hover:underline">
                Esqueceu sua senha?
              </a>
            </div>
            
            <Button type="submit" className="w-full bg-gradient-app">
              Entrar
            </Button>
          </form>
          
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-gray-500">Ou continue com</span>
            </div>
          </div>
          
          <Button
            variant="outline"
            className="w-full mb-6"
            onClick={handleGoogleLogin}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continuar com Google
          </Button>
          
          <div className="text-center">
            <p className="text-sm text-gray-500">
              Não tem uma conta?{' '}
              <a href="#" className="text-primary font-medium hover:underline">
                Cadastre-se
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
