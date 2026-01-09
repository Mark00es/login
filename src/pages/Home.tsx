import { ButtonTheme } from '@/components/ButtonTheme';
import { notify, notifyOtro } from '@/utils/notification.usecase';
import Container from '@mui/material/Container';

export default function Home() {
  return (
    <Container>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae eligendi voluptate facere odit ad rem eum
        ipsa. Eaque, eligendi! Deleniti, eius vero aperiam sapiente ipsum totam quos officia perferendis illum?
      </p>
      <ButtonTheme />
      <button
        onClick={() => {
          notify.success('Mensaje enviando');
        }}
      >
        Notificaicion
      </button>
      <button
        onClick={() => {
          notifyOtro.success('Mensaje enviando del otroo');
        }}
      >
        Notificaicion
      </button>
    </Container>
  );
}
