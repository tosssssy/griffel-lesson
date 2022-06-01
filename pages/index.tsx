import {
  GriffelStyle,
  makeStyles,
  mergeClasses,
  shorthands,
} from '@griffel/react'
import { NextPage } from 'next'
import Image from 'next/image'
import { User } from '../types/user'
import { ProfileCard } from './../components/ProfileCard'

// ダミーのデータ
const users: User[] = [...Array(12)].map(() => {
  return {
    imageUrl: 'https://source.unsplash.com/JN0SUcTOig0',
    name: 'Courtney Henry',
    age: 21,
    job: 'Designer',
    description:
      'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis ',
  }
})

const useClasses = makeStyles({
  container: {
    maxWidth: '1024px',
    ...shorthands.margin('0', 'auto'),
  },
  profileCardList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    ...shorthands.gap('15px'),
  },
  profileCardClass: {},
})

const Home: NextPage = () => {
  const classes = useClasses()

  return (
    <div className={classes.container}>
      <div className={classes.profileCardList}>
        {users.map((user, i) => (
          <ProfileCard key={i} className={classes} user={user} />
        ))}
      </div>
    </div>
  )
}

export default Home
