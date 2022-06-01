import {
  GriffelStyle,
  makeStyles,
  mergeClasses,
  shorthands,
} from '@griffel/react'
import { FC } from 'react'
import { User } from '../types/user'
import Image from 'next/image'

const useClasses = makeStyles({
  wrapper: {
    width: '300px',
    backgroundColor: 'white',
    color: 'MenuText',
    fontFamily:
      'Inter var,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
    boxShadow:
      '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    ...shorthands.borderRadius('10px'),
    ...shorthands.overflow('hidden'),
    ...shorthands.padding('10px'),
  },
  img: { ...shorthands.margin('-10px', '-10px', '0px') },
  name: { fontSize: '1rem', fontWeight: 'bold', marginTop: '5px' },
  job: { fontSize: '0.9rem', color: 'navy' },
  description: { fontSize: '1rem', marginTop: '10px', color: 'GrayText' },
})

type ProfileCardProps = {
  className?: Record<'profileCardClass', string>
  user: User
}

export const ProfileCard: FC<ProfileCardProps> = ({ className, user }) => {
  const classes = useClasses()
  return (
    <div className={mergeClasses(classes.wrapper, className?.profileCardClass)}>
      <div className={classes.img}>
        <Image src={user.imageUrl} alt="woman" width={500} height={300} />
      </div>
      <h2 className={classes.name}>{user.name}</h2>
      <span className={classes.job}>{user.job}</span>
      <p className={classes.description}>{user.description}</p>
    </div>
  )
}
