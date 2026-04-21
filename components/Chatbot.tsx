'use client';
import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useChat } from 'ai/react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  });

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 bg-red-600 hover:bg-red-700 text-white w-16 h-16 rounded-2xl shadow-2xl flex items-center justify-center z-50 transition hover:scale-110"
      >
        <MessageCircle size={32} />
      </button>

      {/* Ventana del Chat */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 w-96 h-[520px] bg-white rounded-3xl shadow-2xl border flex flex-col z-50 overflow-hidden">
          {/* Header */}
          <div className="bg-red-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white rounded-2xl flex items-center justify-center text-red-600 font-bold text-xl">🤖</div>
              <div>
                <p className="font-semibold">AutoBot IA</p>
                <p className="text-xs opacity-75">Asistente experto en autopartes</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded-xl">
              <X size={24} />
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
            {messages.length === 0 && (
              <p className="text-center text-gray-500 mt-8">Hola! ¿Qué repuesto necesitas?</p>
            )}
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-3 rounded-2xl ${m.role === 'user' ? 'bg-red-600 text-white' : 'bg-white shadow'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && <p className="text-center text-sm text-gray-400">AutoBot está pensando...</p>}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t flex gap-3">
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="Ej: Aceite para Toyota Hilux..."
              className="flex-1 border rounded-2xl px-5 py-3 focus:outline-none focus:border-red-600"
            />
            <button type="submit" className="bg-red-600 text-white px-6 rounded-2xl hover:bg-red-700">
              <Send size={22} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
