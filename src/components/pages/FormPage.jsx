import React from 'react';
import {
  Page,
  Navbar,
  List,
  ListItem,
  ListInput,
  Toggle,
  BlockTitle,
  Row,
  Button,
  Range,
  Block
} from 'framework7-react';

export default ({
  onGoBackToHomePage,
  onNameUpdated,
  onEmailUpdated,
  onUrlUpdated,
  onPasswordUpdated,
  onPhoneUpdated,
  onGenderUpdated,
  onBirthdateUpdated,
  onToggleUpdated,
  onSliderUpdated,
  onTextAreaUpdated,
  onResizableUpdated,
  onCheckboxUpdated,
  onRadioButtonUpdated,

  name,
  email,
  url,
  password,
  phone,
  gender,
  birthdate,
  toggle,
  slider,
  textArea,
  resizable,
  checkboxGroup,
  radioButtonsGroup,
}) => (
  <Page>
    <Navbar title="Form" backLink="Back" onBackClick={onGoBackToHomePage} />
    <BlockTitle>Form Example</BlockTitle>
    <List form>
      <ListInput
        label="Name"
        type="text"
        placeholder="Name"
        onChange={({ target}) => onNameUpdated(target.value)} 
        value={name} 
      ></ListInput>

      <ListInput
        label="E-mail"
        type="email"
        placeholder="E-mail"
        onChange={({ target }) => onEmailUpdated(target.value)} 
        value={email} 
      ></ListInput>

      <ListInput
        label="URL"
        type="url"
        placeholder="URL"
        onChange={({ target }) => onUrlUpdated(target.value)} 
        value={url} 
      ></ListInput>

      <ListInput
        label="Password"
        type="password"
        placeholder="Password"
        onChange={({ target }) => onPasswordUpdated(target.value)} 
        value={password} 
      ></ListInput>

      <ListInput
        label="Phone"
        type="tel"
        placeholder="Phone"
        onChange={({ target }) => onPhoneUpdated(target.value)} 
        value={phone} 
      ></ListInput>

      <ListInput
        label="Gender"
        type="select"
        value={gender} 
        onChange={({ target }) => onGenderUpdated(target.value)}
        >
        <option value={0}>Male</option>
        <option value={1}>Female</option>
      </ListInput>

      <ListInput
        label="Birth date"
        type="date"
        placeholder="Birth day"
        defaultValue="2014-04-30"
        onChange={({ target }) => onBirthdateUpdated(target.value)} 
        value={birthdate} 
      ></ListInput>

      <ListItem
        title="Toggle"
      >
        <Toggle slot="after" onToggleChange={onToggleUpdated} checked={toggle} />
      </ListItem>

      <ListInput
        label="Range"
        input={false}
      >
        <Range slot="input" min={0} max={100} step={1} value={slider} label={true} onRangeChanged={(value) => onSliderUpdated(value)} />
      </ListInput>

      <ListInput
        type="textarea"
        label="Textarea"
        placeholder="Bio"
        onChange={({ target }) => onTextAreaUpdated(target.value)} 
        value={textArea}
      ></ListInput>
      <ListInput
        type="textarea"
        label="Resizable"
        placeholder="Bio"
        resizable
        onChange={({ target }) => onResizableUpdated(target.value)} 
        value={resizable}>
      ></ListInput>
    </List>

    <BlockTitle>Checkbox group</BlockTitle>
    <List form>
        {Array.from(Array(3).keys()).map(n => (
            <ListItem
              key={n}
              checkbox
              name="my-checkbox"
              value={n + 1}
              title={`Checkbox ${n + 1}`}
              onClick={() => onCheckboxUpdated(n + 1)}
              checked={checkboxGroup[`checkbox${n + 1}`]}              
            />
        ))}
    </List>

    <BlockTitle>Radio buttons group</BlockTitle>
    <List form>
        {Array.from(Array(3).keys()).map(n => (
            <ListItem
              key={n} radio name="my-radio"
              checked={n === radioButtonsGroup}
              value={n + 1} title={`Radio ${n + 1}`}
              onClick={() => onRadioButtonUpdated(n)}
            />
        ))}
    </List>

    <BlockTitle>Buttons</BlockTitle>
    <Block strong>
      <Row tag="p">
        <Button className="col">Button</Button>
        <Button className="col" fill>Fill</Button>
      </Row>
      <Row tag="p">
        <Button className="col" raised>Raised</Button>
        <Button className="col" raised fill>Raised Fill</Button>
      </Row>
      <Row tag="p">
        <Button className="col" round>Round</Button>
        <Button className="col" round fill>Round Fill</Button>
      </Row>
      <Row tag="p">
        <Button className="col" outline>Outline</Button>
        <Button className="col" round outline>Outline Round</Button>
      </Row>
      <Row tag="p">
        <Button className="col" small outline>Small</Button>
        <Button className="col" small round outline>Small Round</Button>
      </Row>
      <Row tag="p">
        <Button className="col" small fill>Small</Button>
        <Button className="col" small round fill>Small Round</Button>
      </Row>
      <Row tag="p">
        <Button className="col" big raised>Big</Button>
        <Button className="col" big fill raised>Big Fill</Button>
      </Row>
      <Row tag="p">
        <Button className="col" big fill raised color="red">Big Red</Button>
        <Button className="col" big fill raised color="green">Big Green</Button>
      </Row>
    </Block> 
  </Page>
);
