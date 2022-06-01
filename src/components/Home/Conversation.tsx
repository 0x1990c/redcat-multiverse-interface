import React from 'react'
import styles from './HomeHero.module.scss'
import { tags } from './helpers/tags';
import { ConversationBot1 } from './components/ConversationBot1';
import { ConversationBot2 } from './components/ConversationBot2';

export const Conversation = () => {
  return (
    <div className={styles['container-chat']}>
      {
        tags.map((tag) => (
          tag.id % 2 === 0
            ? <ConversationBot1 key={tag.id} tag={tag} />
            : <ConversationBot2 key={tag.id} tag={tag} />
        ))
      }
    </div>
  )
}
