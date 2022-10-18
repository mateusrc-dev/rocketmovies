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
  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)
    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
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