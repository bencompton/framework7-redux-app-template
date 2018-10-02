import React from 'react';
import {
  Page,
  Navbar,
  List,
  ListItem,
  Input,
  Label,
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
      <ListItem>
        <Label>Name</Label>
        <Input type="text" placeholder="Name" onChange={({ target}) => onNameUpdated(target.value)} value={name} />
      </ListItem>
      <ListItem>
        <Label>E-mail</Label>
        <Input type="email" placeholder="E-mail" onChange={({ target }) => onEmailUpdated(target.value)} value={email} />
      </ListItem>
      <ListItem>
        <Label>URL</Label>
        <Input type="url" placeholder="URL" onChange={({ target }) => onUrlUpdated(target.value)} value={url} />
      </ListItem>
      <ListItem>
        <Label>Password</Label>
        <Input type="password" placeholder="Password" onChange={({ target }) => onPasswordUpdated(target.value)} value={password} />
      </ListItem>
      <ListItem>
        <Label>Phone</Label>
        <Input type="tel" placeholder="Phone" onChange={({ target }) => onPhoneUpdated(target.value)} value={phone} />
      </ListItem>
      <ListItem>
        <Label>Gender</Label>
        <Input type="select" value={gender} onChange={({ target }) => onGenderUpdated(target.value)}>
          <option value={0}>Male</option>
          <option value={1}>Female</option>
        </Input>
      </ListItem>
      <ListItem>
        <Label>Birth date</Label>
        <Input type="date" placeholder="Birth date" onChange={({ target }) => onBirthdateUpdated(target.value)} value={birthdate} />
      </ListItem>
      <ListItem title="Toggle">
        <Toggle slot="after" onToggleChange={onToggleUpdated} checked={toggle} />
      </ListItem>
      <ListItem>
        <Label>Slider</Label>
        <Input>
          <Range min="0" max="100" value={slider} step="1" label={true} onRangeChange={(value) => onSliderUpdated(value)} />
        </Input>
      </ListItem>
      <ListItem>
        <Label>Textarea</Label>
        <Input type="textarea" placeholder="Bio" onChange={({ target }) => onTextAreaUpdated(target.value)} value={textArea}></Input>
      </ListItem>
      <ListItem>
        <Label>Resizable</Label>
        <Input type="textarea" placeholder="Bio" resizable onChange={({ target }) => onResizableUpdated(target.value)} value={resizable}></Input>
      </ListItem>
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
              onClick={() => onCheckboxUpdated(n)}
              checked={checkboxGroup[`checkbox${n}`]}              
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
