import React from "react";
import { Button } from "../../common/Button/Button";
import { Content } from "../../common/Content/Content";
import { Form } from "../../common/Form/Form";
import { List, ListItem } from "../../common/List/List";
import { PasswordInput } from "../../common/PasswordInput/PasswordInput";
import { TextInput } from "../../components/TextInput/TextInput";

export const Register = () => {
  return (
    <Content title="회원가입">
      <Form>
        <List>
          <ListItem>
            <TextInput placeholder="아이디" />
          </ListItem>
          <ListItem>
            <PasswordInput placeholder="비밀번호" />
          </ListItem>
          <ListItem>
            <PasswordInput placeholder="비밀번호 확인" />
          </ListItem>
          <ListItem>
            <TextInput placeholder="이메일" />
          </ListItem>
        </List>
        <Button type="submit">회원가입</Button>
      </Form>
    </Content>
  );
};
