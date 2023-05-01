import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { ConfirmForm, FormActions, FormHeader } from './styles'
import { CalendarBlank, Clock } from 'phosphor-react'

export function ConfirmStep() {
  function handleConfirmScheduling() { }

  return (
    <ConfirmForm as={'form'} onSubmit={handleConfirmScheduling}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          20 de agosto de 2022
        </Text>
        <Text>
          <Clock />
        </Text>
      </FormHeader>
      <label>
        <Text size={'sm'}>Nome completo</Text>
        <TextInput placeholder="Seu nome" />
      </label>
      <label>
        <Text size={'sm'}>Nome completo</Text>
        <TextInput type="email" placeholder="johndoe@example.com" />
      </label>
      <label>
        <Text size={'sm'}>Observações</Text>
        <TextArea />
      </label>
      <FormActions>
        <Button type="button" variant="tertiary">
          Cancelar
        </Button>
        <Button type="submit">Confirmar</Button>
      </FormActions>
    </ConfirmForm>
  )
}
