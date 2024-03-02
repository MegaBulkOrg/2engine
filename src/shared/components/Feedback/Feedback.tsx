import feedbackFormBg from 'Assets/feedback_form_bg.png';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Icon } from '../icons/Icon/Icon';
import { EIcon } from '../icons/enums';
import styles from './feedback.scss';

export function Feedback() {
  const [communicationMethod, setCommunicationMethod] = useState('call');
  const [communicationMethodLabelText, setCommunicationMethodLabelText] = useState('номер Телефона:');
  const [communicationMethodCallClasses, setCommunicationMethodCallClasses] = useState(`${styles.feedback__communicationMethodItem}`);
  const [communicationMethodEmailClasses, setCommunicationMethodEmailClasses] = useState(`${styles.feedback__communicationMethodItem}`);
  const [communicationMethodTelegramClasses, setCommunicationMethodTelegramClasses] = useState(`${styles.feedback__communicationMethodItem}`);
  const [communicationMethodWhatsappClasses, setCommunicationMethodWhatsappClasses] = useState(`${styles.feedback__communicationMethodItem}`);
  //
  const [list, setList] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [comment, setComment] = useState('');
  //
  const [listVerified, setListVerified] = useState(false);
  const [nameVerified, setNameVerified] = useState(false);
  const [contactVerified, setContactVerified] = useState(false);
  const [commentVerified, setCommentVerified] = useState(false);
  //
  const [firstSubmit, setFirstSubmit] = useState(false);
  const [contactErrorMsg, setContactErrorMsg] = useState('');

  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' })
  const formBg = !isMobile ? {backgroundImage: `url(${feedbackFormBg})`} : {backgroundImage: 'none'}
  
  function choosingCommunicationMethod(method: string) {
    setCommunicationMethod(method)
    if (method === 'call') setCommunicationMethodLabelText('номер Телефона:')
    if (method === 'email') setCommunicationMethodLabelText('E-mail:')
    if (method === 'telegram') setCommunicationMethodLabelText('логин в Telegram:')
    if (method === 'whatsapp') setCommunicationMethodLabelText('номер WhatsApp:')
  }

  function handleChangeList(event: ChangeEvent<HTMLTextAreaElement>) {
    setList(event.target.value)
  }
    
  function handleChangeFiles (event: ChangeEvent<HTMLInputElement>) {
    const selectedFiles = Array.from(event.target.files || []);
    setFiles(selectedFiles);
  }

  function handleChangeName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }

  function handleChangeContact(event: ChangeEvent<HTMLInputElement>) {
    setContact(event.target.value)
  }
  
  function handleChangeComment(event: ChangeEvent<HTMLTextAreaElement>) {
    setComment(event.target.value)
  }

  function deleteAttachedFile(currentFile:File) {
    const newFiles = files.filter(file => file.name !== currentFile.name)
    setFiles(newFiles)
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setFirstSubmit(true);
    // проверка поля с списком
    list.length > 1000 ? setListVerified(false) : setListVerified(true)
    // проверка поля с именем
    const nameRegEx = /^[а-яА-ЯёЁ]{2,25}$/
    nameRegEx.test(name) ? setNameVerified(true) : setNameVerified(false)
    // проверка поля с контактом
    if (communicationMethod === 'call') {
      const contactRegEx = /^\+7\d{10}$/
      if (contactRegEx.test(contact)) {
        setContactVerified(true)
      } else {
        setContactVerified(false)
        setContactErrorMsg('Введите номер в формате +70000000000')
      }
    }
    if (communicationMethod === 'email') {
      const contactRegEx = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u
      if (contactRegEx.test(contact)) {
        setContactVerified(true)
      } else {
        setContactVerified(false)
        setContactErrorMsg('Введите правильный e-mail')
      }
    }
    if (communicationMethod === 'telegram') {
      const contactRegEx = /^@.1,39/
      if (contactRegEx.test(contact)) {
        setContactVerified(true)
      } else {
        setContactVerified(false)
        setContactErrorMsg('Вы введи неправильный логин')
      }
    }
    if (communicationMethod === 'whatsapp') {
      const contactRegEx = /^\+7\d{10}$/
      if (contactRegEx.test(contact)) {
        setContactVerified(true)
      } else {
        setContactVerified(false)
        setContactErrorMsg('Введите номер в формате +70000000000')
      }
    }

    // проверка поля с комментарием
    comment.length > 1000 ? setCommentVerified(false) : setCommentVerified(true)
  }

  useEffect(() => {
      async function sendingForm() {
        if (listVerified && nameVerified && contactVerified && commentVerified) {
          const data = {list, name, contact, comment, files};
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
              method: 'POST',
              body: JSON.stringify(data)
          })
          .then((data) => data.json())
          .catch((error) => error);
          return response;
        }
      }
      sendingForm()
  }, [listVerified && nameVerified && contactVerified && commentVerified])

  useEffect(() => {
    if (communicationMethod === 'call') {
      setCommunicationMethodCallClasses(`${styles.feedback__communicationMethodItem} ${styles.feedback__communicationMethodItemSelected}`)
      setCommunicationMethodEmailClasses(`${styles.feedback__communicationMethodItem}`)
      setCommunicationMethodTelegramClasses(`${styles.feedback__communicationMethodItem}`)
      setCommunicationMethodWhatsappClasses(`${styles.feedback__communicationMethodItem}`)
    }
    if (communicationMethod === 'email') {
      setCommunicationMethodCallClasses(`${styles.feedback__communicationMethodItem}`)
      setCommunicationMethodEmailClasses(`${styles.feedback__communicationMethodItem} ${styles.feedback__communicationMethodItemSelected}`)
      setCommunicationMethodTelegramClasses(`${styles.feedback__communicationMethodItem}`)
      setCommunicationMethodWhatsappClasses(`${styles.feedback__communicationMethodItem}`)     
    }
    if (communicationMethod === 'telegram') {
      setCommunicationMethodCallClasses(`${styles.feedback__communicationMethodItem}`)
      setCommunicationMethodEmailClasses(`${styles.feedback__communicationMethodItem}`)
      setCommunicationMethodTelegramClasses(`${styles.feedback__communicationMethodItem} ${styles.feedback__communicationMethodItemSelected}`)
      setCommunicationMethodWhatsappClasses(`${styles.feedback__communicationMethodItem}`)
    }
    if (communicationMethod === 'whatsapp') {
      setCommunicationMethodCallClasses(`${styles.feedback__communicationMethodItem}`)
      setCommunicationMethodEmailClasses(`${styles.feedback__communicationMethodItem}`)
      setCommunicationMethodTelegramClasses(`${styles.feedback__communicationMethodItem}`)
      setCommunicationMethodWhatsappClasses(`${styles.feedback__communicationMethodItem} ${styles.feedback__communicationMethodItemSelected}`)
    }
  }, [communicationMethod])

  return (
    <section className={styles.feedback}>
        <div className={`${styles.containerFluid} ${styles.feedback__container}`}>
            <h2 className={styles.feedback__title}>Форма приема заказов</h2>
            <div className={styles.feedback__formContainer} style={formBg}>
              <form className={styles.feedback__form} onSubmit={handleSubmit}>
                  <div className={styles.feedback__firstFormBox}>
                    <div className={styles.feedback__fileFormGroup}>
                        <label className={styles.feedback__fileInputLabel} htmlFor='list'>Введите перечень товаров, услуг, характеристик и объемов</label>
                        <textarea id='list' className={styles.feedback__inputTextarea} name="list" 
                          value={list} onChange={handleChangeList}
                          placeholder='Арматура в прутах ГОСТ 5254-94, диаметр 22 мм, 4 тонны' 
                        />
                        {!listVerified && firstSubmit &&
                          <p className={styles.feedback__errorMsg}>Должно быть не более 1000 символов</p>
                        }
                    </div>
                    <div className={styles.feedback__formGroup}>
                        <label className={styles.feedback__attachFileLabel} htmlFor='files'>
                          <Icon name={EIcon.feedbackAttachFileIcon} />
                          Прикрепить файлы
                        </label>
                        <input id='files' className={styles.feedback__attachFileInput} type='file' onChange={handleChangeFiles} multiple />
                        {files.length !== 0 &&
                          <div className={styles.feedback__filesPreview}>
                            {files.map((file) => {
                              if (file.type === 'image/jpeg') {
                                return (
                                  <div className={styles.feedback__attachedFileBox}>
                                    <img className={styles.feedback__attachedFile} key={file.size} src={URL.createObjectURL(file)} alt={file.name}/>
                                    <div className={styles.feedback__attachedFileDelete} onClick={() => deleteAttachedFile(file)}>
                                      <Icon name={EIcon.attachedFileDelete} />
                                    </div>
                                  </div>
                                )
                              } else {
                                return (
                                  <div className={styles.feedback__attachedFileBox}>
                                    <div className={`${styles.feedback__attachedFile} ${styles.feedback__attachedNoPhoto}`}>{file.name}</div>
                                    <div className={styles.feedback__attachedFileDelete} onClick={() => deleteAttachedFile(file)}>
                                      <Icon name={EIcon.attachedFileDelete} />
                                    </div>
                                  </div>
                                )
                              }
                            })}
                          </div>
                        }
                    </div>
                  </div>
                  <div className={styles.feedback__secondFormBox}>
                    <h3 className={styles.feedback__communicationMethodTitle}>Выберите удобный способ связи:</h3>
                    <div className={styles.feedback__communicationMethodContainer}>
                      <button type="button" className={communicationMethodCallClasses} onClick={() => choosingCommunicationMethod('call')}>
                        <Icon name={EIcon.communicationMethodCallIcon} />
                        <p>Звонок</p>
                      </button>
                      <button type="button" className={communicationMethodEmailClasses} onClick={() => choosingCommunicationMethod('email')}>
                        <Icon name={EIcon.communicationMethodEmailIcon} />
                        <p>E-mail</p>
                      </button>
                      <button type="button" className={communicationMethodTelegramClasses} onClick={() => choosingCommunicationMethod('telegram')}>
                        <Icon name={EIcon.communicationMethodTelegramIcon} />
                        <p>Telegram</p>
                      </button>
                      <button type="button" className={communicationMethodWhatsappClasses} onClick={() => choosingCommunicationMethod('whatsapp')}>
                        <Icon name={EIcon.communicationMethodWhatsappIcon} />
                        <p>WhatsApp</p>
                      </button>
                    </div>
                    <div className={styles.feedback__thirdFormBox}>
                      <div className={styles.feedback__thirdFormBox_twoCols}>
                        <div className={styles.feedback__textFormGroup}>
                            <label className={styles.feedback__textInputLabel} htmlFor='name'>Введите ваше имя:</label>
                            <input id='name' className={styles.feedback__input} name='name' 
                              value={name} onChange={handleChangeName}
                              placeholder='Введите имя' 
                            />
                        {!nameVerified && firstSubmit &&
                          <p className={styles.feedback__errorMsg}>Введите только русские буквы от 2 до 25 знаков</p>
                        }
                        </div>
                        <div className={styles.feedback__textFormGroup}>
                            <label className={styles.feedback__textInputLabel} htmlFor='contact'>
                              Введите <span>{communicationMethodLabelText}</span>
                            </label>
                            <input id='contact' className={styles.feedback__input} name='contact' 
                              value={contact} onChange={handleChangeContact}
                            />
                        {!contactVerified && firstSubmit &&
                          <p className={styles.feedback__errorMsg}>{contactErrorMsg}</p>
                        }
                        </div>
                      </div>
                      <div className={styles.feedback__textFormGroup}>
                        <label className={styles.feedback__textInputLabel} htmlFor='comment'>Комментарий</label>
                        <textarea id='comment' className={styles.feedback__inputTextarea} name="comment" 
                          value={comment} onChange={handleChangeComment}
                          placeholder='Текст комментария' 
                        />
                        {!commentVerified && firstSubmit &&
                          <p className={styles.feedback__errorMsg}>Должно быть не более 1000 символов</p>
                        }
                      </div>
                    </div>
                    <div className={styles.feedback__checkboxFormGroup}>
                      <label className={styles.feedback__checkboxLabel}>
                        <input className={styles.feedback__checkbox} type="checkbox" name="privacy-policy" />
                        <span className={styles.feedback__styledCheckbox}></span>
                        <span className={styles.feedback__checkboxText}>Даю согласие на обработку персональных данных</span>
                      </label>
                      <button className={styles.feedback__submitBtn} type='submit' value='Отправить запрос'>
                        <Icon name={EIcon.feedbackSubmitBtnIcon} />
                        Отправить запрос
                      </button>
                    </div>
                  </div>
              </form>
            </div>
        </div>
    </section>
  );
}