import { getAll, getById, createUser, updateUser, deleteUser, Usuario } from './_data';

const send = (res: any, status: number, data: any) => res.status(status).json({ status, data });

function parseId(q: any): number | null {
  if (!q) return null;
  const val = Array.isArray(q) ? q[0] : q;
  const n = Number(val);
  return Number.isNaN(n) ? null : n;
}

// Arquivo de compatibilidade: este handler foi substituído pela implementação em
// `api/users/index.ts` e `api/users/[id].ts`. Mantemos um stub que informa a
// descontinuação para evitar conflitos de rota.

export default function handler(_req: any, res: any) {
  res.status(410).json({ status: 410, erro: 'Endpoint descontinuado. Use /api/users (pasta) com index.ts e [id].ts' });
}
