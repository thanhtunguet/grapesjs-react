import Editor from 'Editor/Editor';
import nameof from 'ts-nameof.macro';
import NewsletterEditor from './NewsletterEditor/NewsletterEditor';
import {storiesOf} from '@storybook/react';
import WebPageEditor from './WebPageEditor/WebPageEditor';
import MJMLEditor from './MJMLEditor/MJMLEditor';
import EditorMounting from './EditorMounting/EditorMounting';

export default {
  title: nameof(Editor),
};

storiesOf('Editor', module)
  .add(nameof(NewsletterEditor), NewsletterEditor)
  .add(nameof(WebPageEditor), WebPageEditor)
  .add(nameof(MJMLEditor), MJMLEditor)
  .add(nameof(EditorMounting), EditorMounting);
