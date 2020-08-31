<template>
    <div class="header">
        <b-navbar toggleable="sm" fixed="top" type="primary" variant="info">
            <b-navbar-brand>
                
                <b-link href="https://www.grupozap.com/" target="_blank">
                    <img src="../assets/logo_grupo_zap.png" alt="logo">
                </b-link>
                
            </b-navbar-brand>
            <b-navbar-toggle target="navbar-toggle-collapse">
                <template v-slot:default="{ expanded }">
                    <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                    <b-icon v-else icon="chevron-bar-down"></b-icon>
                </template>
            </b-navbar-toggle>
            <b-collapse id="navbar-toggle-collapse" is-nav>
                <b-navbar-nav justified type class="ml-auto">
                    <div>
                        <b-button exact :active-class="this.classActive" class="bg-light btn text-dark" to="/">Home</b-button>
                    </div>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                classActive: 'd-none'
            }
        }
    }
</script>
