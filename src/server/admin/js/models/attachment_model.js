define(['exports', 'backbone', 'config'], function (exports, _backbone, _config) {
	'use strict';

	/*
 * @Author: Lutz Reiter, Design Research Lab, Universität der Künste Berlin
 * @Date:   2016-05-04 11:38:41
 * @Last Modified by:   lutzer
 * @Last Modified time: 2016-07-15 00:26:37
 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _backbone2 = _interopRequireDefault(_backbone);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var AttachmentModel = function (_Backbone$Model) {
		_inherits(AttachmentModel, _Backbone$Model);

		function AttachmentModel() {
			_classCallCheck(this, AttachmentModel);

			return _possibleConstructorReturn(this, (AttachmentModel.__proto__ || Object.getPrototypeOf(AttachmentModel)).apply(this, arguments));
		}

		_createClass(AttachmentModel, [{
			key: 'save',
			value: function save(attrs, options) {
				attrs = _.omit(attrs, 'interview');
				return _backbone2.default.Model.prototype.save.call(this, attrs, options);
			}
		}, {
			key: 'urlRoot',
			get: function get() {
				return _config2.default['web_service_url'] + "attachments";
			}
		}, {
			key: 'idAttribute',
			get: function get() {
				return '_id';
			}
		}, {
			key: 'defaults',
			get: function get() {
				return {
					file: false,
					text: '',
					tags: [],
					interview: false
				};
			}
		}]);

		return AttachmentModel;
	}(_backbone2.default.Model);

	exports.default = AttachmentModel;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvYXR0YWNobWVudF9tb2RlbC5qcyJdLCJuYW1lcyI6WyJBdHRhY2htZW50TW9kZWwiLCJhdHRycyIsIm9wdGlvbnMiLCJfIiwib21pdCIsIk1vZGVsIiwicHJvdG90eXBlIiwic2F2ZSIsImNhbGwiLCJmaWxlIiwidGV4dCIsInRhZ3MiLCJpbnRlcnZpZXciXSwibWFwcGluZ3MiOiI7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBVU1BLGU7Ozs7Ozs7Ozs7O3dCQWVBQyxLLEVBQU9DLE8sRUFBUztBQUNkRCxZQUFRRSxFQUFFQyxJQUFGLENBQU9ILEtBQVAsRUFBYSxXQUFiLENBQVI7QUFDQSxXQUFPLG1CQUFTSSxLQUFULENBQWVDLFNBQWYsQ0FBeUJDLElBQXpCLENBQThCQyxJQUE5QixDQUFtQyxJQUFuQyxFQUF5Q1AsS0FBekMsRUFBZ0RDLE9BQWhELENBQVA7QUFDSDs7O3VCQWhCVTtBQUFFLFdBQU8saUJBQU8saUJBQVAsSUFBMEIsYUFBakM7QUFBZ0Q7Ozt1QkFFOUM7QUFBRSxXQUFPLEtBQVA7QUFBYzs7O3VCQUVuQjtBQUNkLFdBQU87QUFDSE8sV0FBTSxLQURIO0FBRUhDLFdBQU0sRUFGSDtBQUdIQyxXQUFNLEVBSEg7QUFJSEMsZ0JBQVk7QUFKVCxLQUFQO0FBTUE7Ozs7R0FiNEIsbUJBQVNQLEs7O21CQXFCeEJMLGUiLCJmaWxlIjoiYXR0YWNobWVudF9tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLypcbiogQEF1dGhvcjogTHV0eiBSZWl0ZXIsIERlc2lnbiBSZXNlYXJjaCBMYWIsIFVuaXZlcnNpdMOkdCBkZXIgS8O8bnN0ZSBCZXJsaW5cbiogQERhdGU6ICAgMjAxNi0wNS0wNCAxMTozODo0MVxuKiBATGFzdCBNb2RpZmllZCBieTogICBsdXR6ZXJcbiogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxNi0wNy0xNSAwMDoyNjozN1xuKi9cblxuaW1wb3J0IEJhY2tib25lIGZyb20gJ2JhY2tib25lJztcbmltcG9ydCBDb25maWcgZnJvbSAnY29uZmlnJztcblxuY2xhc3MgQXR0YWNobWVudE1vZGVsIGV4dGVuZHMgQmFja2JvbmUuTW9kZWwge1xuXG5cdGdldCB1cmxSb290KCkgeyByZXR1cm4gQ29uZmlnWyd3ZWJfc2VydmljZV91cmwnXStcImF0dGFjaG1lbnRzXCIgfVxuXG5cdGdldCBpZEF0dHJpYnV0ZSgpIHsgcmV0dXJuICdfaWQnIH1cblxuXHRnZXQgZGVmYXVsdHMoKSB7IFxuXHRcdHJldHVybiB7XG5cdCAgICBcdGZpbGU6IGZhbHNlLFxuXHQgICAgXHR0ZXh0OiAnJyxcblx0ICAgIFx0dGFnczogW10sXG5cdCAgICBcdGludGVydmlldyA6IGZhbHNlXG5cdFx0fVxuXHR9XG5cblx0c2F2ZShhdHRycywgb3B0aW9ucykge1xuICAgICAgICBhdHRycyA9IF8ub21pdChhdHRycywnaW50ZXJ2aWV3Jyk7XG4gICAgICAgIHJldHVybiBCYWNrYm9uZS5Nb2RlbC5wcm90b3R5cGUuc2F2ZS5jYWxsKHRoaXMsIGF0dHJzLCBvcHRpb25zKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF0dGFjaG1lbnRNb2RlbCJdfQ==