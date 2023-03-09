import { LoginContainer } from "./Login.styles";
import { Content } from "../../common/Content/Content";
import { List, ListItem } from "../../common/List/List";
import { TextInput } from "../../components/TextInput/TextInput";
import { PasswordInput } from "../../common/PasswordInput/PasswordInput";
import { Button } from "../../common/Button/Button";
import { Form } from "../../common/Form/Form";

const Login = () => {
  return (
    <Content title="로그인">
      <Form>
        <List>
          <ListItem>
            <TextInput placeholder="아이디" />
          </ListItem>
          <ListItem>
            <PasswordInput placeholder="비밀번호" />
          </ListItem>
        </List>
        <Button type="submit">로그인</Button>
      </Form>
    </Content>
  );
};

export default Login;
