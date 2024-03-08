/**
 * @license Copyright (c) 2014-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import type { EditorConfig } from '@ckeditor/ckeditor5-core';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FontBackgroundColor, FontColor, FontFamily } from '@ckeditor/ckeditor5-font';
import { Highlight } from '@ckeditor/ckeditor5-highlight';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';
import { SpecialCharacters, SpecialCharactersEssentials, SpecialCharactersText } from '@ckeditor/ckeditor5-special-characters';
import { Table, TableCaption, TableCellProperties, TableColumnResize, TableProperties, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { Undo } from '@ckeditor/ckeditor5-undo';
import { EditorWatchdog } from '@ckeditor/ckeditor5-watchdog';
declare class Editor extends ClassicEditor {
    static builtinPlugins: (typeof Alignment | typeof Autoformat | typeof BlockQuote | typeof Bold | typeof Essentials | typeof FontBackgroundColor | typeof FontColor | typeof FontFamily | typeof Highlight | typeof Indent | typeof IndentBlock | typeof Italic | typeof Link | typeof List | typeof Paragraph | typeof PasteFromOffice | typeof RemoveFormat | typeof SourceEditing | typeof SpecialCharacters | typeof SpecialCharactersEssentials | typeof SpecialCharactersText | typeof Table | typeof TableCaption | typeof TableCellProperties | typeof TableColumnResize | typeof TableProperties | typeof TableToolbar | typeof TextTransformation | typeof Underline | typeof Undo)[];
    static defaultConfig: EditorConfig;
}
declare const _default: {
    Editor: typeof Editor;
    EditorWatchdog: typeof EditorWatchdog;
};
export default _default;
