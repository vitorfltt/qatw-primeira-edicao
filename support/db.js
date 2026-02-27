import pgPrmises from 'pg-promise';

const pgp = pgPrmises();
const db = pgp('postgresql://dba:dba@paybank-db:5432/UserDB');   

export async function obterCodigo2FA(cpf) {
    const query = 
    `SELECT t.code 
    FROM public."TwoFactorCode" t
    JOIN public."User" u ON t."userId" = u."id"
    WHERE u.cpf = '${cpf}'
    ORDER BY t."id" DESC
    LIMIT 1;`

    const result = await db.oneOrNone(query)
    return result.code;
}
