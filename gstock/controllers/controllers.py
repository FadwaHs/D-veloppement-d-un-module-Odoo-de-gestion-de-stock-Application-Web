# -*- coding: utf-8 -*-
from odoo import http


class Gstock(http.Controller):
    @http.route('/gstock/gstock/', auth='public')
    def index(self, **kw):
        return "Hello, Imad"

    # @http.route('/gstock/gstock/objects/', auth='public')
    # def list(self, **kw):
    #     return http.request.render('gstock.listing', {
    #         'root': '/gstock/gstock',
    #         'objects': http.request.env['gstock.gstock'].search([]),
    #     })
    #
    # @http.route('/gstock/gstock/objects/<model("gstock.gstock"):obj>/', auth='public')
    # def object(self, obj, **kw):
    #     return http.request.render('gstock.object', {
    #         'object': obj
    #     })
