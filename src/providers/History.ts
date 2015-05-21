import i = require('../Interfaces');
import _ = require('lodash');
import Aliases = require('../Aliases');
import ExecutionHistory = require('../History');

class History implements i.AutocompletionProvider {
    getSuggestions(currentDirectory: string, input: string) {
        return new Promise((resolve) => {
            var mapped: i.Suggestion[] = _.map(ExecutionHistory.stack, (entry: string) => {
                return {
                    value: entry,
                    priority: 0,
                    synopsis: '',
                    description: '',
                    type: 'history'
                };
            });

            resolve(mapped);
        });
    }
}

export = History;
