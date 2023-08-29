import { object, string, number, date, InferType, ref } from 'yup';

const Schema = object({
    email: string().email('Geçerli bir Email adresi giriniz.').required('Gerekli'),
    password: string().min(5, 'Min 5 karakterli olmalıdır').required('Gerekli'),
    confirmPassword: string().required('Gerekli').oneOf([ref('password')], 'Parolalar uyuşumuyor')
});

export default Schema;
