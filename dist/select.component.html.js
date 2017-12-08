"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEMPLATE = "<label\n    *ngIf=\"label !== ''\">\n    {{label}}\n</label>\n<div\n    #selection\n    [attr.tabindex]=\"disabled ? null : 0\"\n    [ngClass]=\"{'open': isOpen, 'focus': hasFocus, 'below': isBelow, 'disabled': disabled}\"\n    (click)=\"onSelectContainerClick($event)\"\n    (focus)=\"onSelectContainerFocus()\"\n    (keydown)=\"onSelectContainerKeydown($event)\">\n\n    <div class=\"single\"\n        *ngIf=\"!multiple\">\n        <div class=\"value\"\n            *ngIf=\"optionList.hasSelected\">\n            <ng-template [ngTemplateOutletContext]=\"{option: optionList.selection[0], onDeselectOptionClick: onDeselectOptionClick}\" [ngTemplateOutlet]=\"optionTemplate\"></ng-template>\n            <span *ngIf=\"!optionTemplate\">{{optionList.selection[0].label}}</span>\n        </div>\n        <div class=\"placeholder\"\n            *ngIf=\"!optionList.hasSelected\">\n            {{placeholderView}}\n        </div>\n        <div class=\"clear\"\n            *ngIf=\"allowClear && optionList.hasSelected\"\n            (click)=\"onClearSelectionClick($event)\">\n            &#x2715;\n        </div>\n        <div class=\"toggle\"\n            *ngIf=\"isOpen\">\n            &#x25B2;\n        </div>\n        <div class=\"toggle\"\n            *ngIf=\"!isOpen\">\n            &#x25BC;\n        </div>\n    </div>\n\n    <div class=\"multiple\"\n        *ngIf=\"multiple\">\n        <div class=\"option\"\n            *ngFor=\"let option of optionList.selection\">\n            <span class=\"deselect-option\"\n                (click)=onDeselectOptionClick(option)>\n                &#x2715;\n            </span>\n            {{option.label}}\n        </div>\n        <div class=\"placeholder\"\n            *ngIf=\"!filterEnabled && !optionList.hasSelected\">\n            {{placeholderView}}\n        </div>\n        <input\n            *ngIf=\"filterEnabled\"\n            #filterInput\n            autocomplete=\"off\"\n            tabindex=\"-1\"\n            [placeholder]=\"placeholderView\"\n            [ngStyle]=\"{'width.px': filterInputWidth}\"\n            (input)=\"onFilterInput($event.target.value)\"\n            (keydown)=\"onMultipleFilterKeydown($event)\"\n            (focus)=\"onMultipleFilterFocus()\"/>\n    </div>\n\n</div>\n<select-dropdown\n    *ngIf=\"isOpen\"\n    #dropdown\n    [multiple]=\"multiple\"\n    [optionList]=\"optionList\"\n    [notFoundMsg]=\"notFoundMsg\"\n    [highlightColor]=\"highlightColor\"\n    [highlightTextColor]=\"highlightTextColor\"\n    [filterEnabled]=\"filterEnabled\"\n    [placeholder]=\"filterPlaceholder\"\n    [width]=\"width\"\n    [top]=\"top\"\n    [left]=\"left\"\n    [optionTemplate]=\"optionTemplate\"\n    (optionClicked)=\"onDropdownOptionClicked($event)\"\n    (optionsListClick)=\"onOptionsListClick()\"\n    (singleFilterClick)=\"onSingleFilterClick()\"\n    (singleFilterFocus)=\"onSingleFilterFocus()\"\n    (singleFilterInput)=\"onFilterInput($event)\"\n    (singleFilterKeydown)=\"onSingleFilterKeydown($event)\">\n</select-dropdown>\n";
