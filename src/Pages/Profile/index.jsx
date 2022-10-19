import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { Link } from 'react-router-dom'
import { Container, Form, Avatar } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { api } from '../../services/api'

export function Profile() {
  const { user, updateProfile } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState("")
  const [passwordNew, setPasswordNew] = useState("")
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)
  async function handleUpdate() {
    const updated = { name, email, password: passwordNew, old_password: passwordOld }
    const userUpdated = Object.assign(user, updated)
    await updateProfile({ user: userUpdated, avatarFile })
  }
  function handleChangeAvatar(event) {//essa função recebe event, que é o evento de alteração do avatar que vem da função onChange
    const file = event.target.files[0] //dentro do evento vamos extrair o arquivo (no caso o arquivo na posição 0)
    setAvatarFile(file) //vamos atualizar o estado do avatarFile com o arquivo que o usuário acabou de adicionar
    const imagePreview = URL.createObjectURL(file); //criando uma URL pra atualizar o estado da variável 'avatar' que exibe o avatar
    setAvatar(imagePreview) //atualizando o estado da variável 'avatar' com a URL criada
  }
  return (
    <Container>
      <header>
        <Link to="/">
          <div><ButtonText title="Voltar" /></div>
        </Link>
      </header>
      <Form>
        <Avatar>
          <img src={avatar} alt="foto do usuário" />
          <label htmlFor="avatar"> <FiCamera /> <input type="file" id="avatar" onChange={handleChangeAvatar}/> </label>
        </Avatar>
        <Input value={name} onChange={e => setName(e.target.value)} placeholder="Nome" type="text" icon={FiUser} />
        <Input value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail" type="text" icon={FiMail} />
        <Input onChange={e => setPasswordOld(e.target.value)} placeholder="Senha atual" type="password" icon={FiLock} />
        <Input onChange={e => setPasswordNew(e.target.value)} placeholder="Nova senha" type="password" icon={FiLock} />
        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  )
}